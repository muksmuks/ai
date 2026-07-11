/** @jsx jsx */
import * as React from "react"
import { jsx, Box } from "theme-ui"

type CarouselProps<T> = {
  items: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  basis?: Array<string | null>
  intervalMs?: number
  getKey?: (item: T, index: number) => string
}

function Carousel<T>({
  items,
  renderItem,
  basis = [`88%`, `46%`, `31%`],
  intervalMs = 4000,
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
    if (items.length <= 1) return undefined
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

  return (
    <Box onMouseEnter={() => (pausedRef.current = true)} onMouseLeave={() => (pausedRef.current = false)}>
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
