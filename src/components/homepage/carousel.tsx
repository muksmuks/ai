/** @jsx jsx */
import * as React from "react"
import { jsx, Box } from "theme-ui"

type CarouselProps<T> = {
  items: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  basis?: Array<string | null>
  intervalMs?: number
  manual?: boolean
  getKey?: (item: T, index: number) => string
}

function Carousel<T>({
  items,
  renderItem,
  basis = [`88%`, `46%`, `31%`],
  intervalMs = 4000,
  manual = false,
  getKey,
}: CarouselProps<T>) {
  const trackRef = React.useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = React.useState(0)
  const pausedRef = React.useRef(false)
  const rafRef = React.useRef<number | null>(null)

  const scrollToIndex = React.useCallback((index: number) => {
    const track = trackRef.current
    if (!track || items.length === 0) return
    const step = track.scrollWidth / items.length
    track.scrollTo({ left: step * index, behavior: `smooth` })
  }, [items.length])

  React.useEffect(() => {
    if (manual || items.length <= 1) return undefined
    const id = setInterval(() => {
      if (pausedRef.current) return
      setActiveIndex((current) => {
        const next = (current + 1) % items.length
        scrollToIndex(next)
        return next
      })
    }, intervalMs)
    return () => clearInterval(id)
  }, [items.length, intervalMs, scrollToIndex])

  const handleScroll = () => {
    if (rafRef.current) return
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null
      const track = trackRef.current
      if (!track || items.length === 0) return
      const step = track.scrollWidth / items.length
      const nearest = Math.round(track.scrollLeft / step)
      setActiveIndex(Math.min(items.length - 1, Math.max(0, nearest)))
    })
  }

  if (items.length === 0) return null

  const goTo = (index: number) => {
    const clamped = (index + items.length) % items.length
    setActiveIndex(clamped)
    scrollToIndex(clamped)
  }

  return (
    <Box
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      sx={{ position: `relative` }}
    >
      {manual && items.length > 1 && (
        <React.Fragment>
          <Box
            as="button"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Previous"
            sx={{
              display: [`none`, `flex`],
              position: `absolute`,
              left: `-14px`,
              top: `50%`,
              transform: `translateY(-50%)`,
              zIndex: 1,
              alignItems: `center`,
              justifyContent: `center`,
              width: `28px`,
              height: `28px`,
              borderRadius: `50%`,
              border: `1px solid`,
              borderColor: `divide`,
              bg: `background`,
              color: `text`,
              cursor: `pointer`,
              boxShadow: `md`,
            }}
          >
            ‹
          </Box>
          <Box
            as="button"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Next"
            sx={{
              display: [`none`, `flex`],
              position: `absolute`,
              right: `-14px`,
              top: `50%`,
              transform: `translateY(-50%)`,
              zIndex: 1,
              alignItems: `center`,
              justifyContent: `center`,
              width: `28px`,
              height: `28px`,
              borderRadius: `50%`,
              border: `1px solid`,
              borderColor: `divide`,
              bg: `background`,
              color: `text`,
              cursor: `pointer`,
              boxShadow: `md`,
            }}
          >
            ›
          </Box>
        </React.Fragment>
      )}
      <Box
        ref={trackRef}
        onScroll={handleScroll}
        sx={{
          display: `flex`,
          overflowX: `auto`,
          scrollSnapType: `x mandatory`,
          gap: 3,
          pb: 2,
          scrollbarWidth: `none`,
          "&::-webkit-scrollbar": { display: `none` },
        }}
      >
        {items.map((item, index) => (
          <Box
            key={getKey ? getKey(item, index) : index}
            sx={{
              flex: `0 0 auto`,
              width: basis,
              scrollSnapAlign: `start`,
            }}
          >
            {renderItem(item, index)}
          </Box>
        ))}
      </Box>
      {items.length > 1 && (
        <Box sx={{ display: `flex`, justifyContent: `center`, gap: 2, mt: 2 }}>
          {items.map((item, index) => (
            <Box
              as="button"
              key={getKey ? getKey(item, index) : index}
              onClick={() => {
                setActiveIndex(index)
                scrollToIndex(index)
              }}
              aria-label={`Go to item ${index + 1}`}
              sx={{
                appearance: `none`,
                border: `none`,
                p: 0,
                width: `6px`,
                height: `6px`,
                borderRadius: `50%`,
                cursor: `pointer`,
                bg: index === activeIndex ? `primary` : `divide`,
                transition: `background-color 0.2s ease`,
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  )
}

export default Carousel
