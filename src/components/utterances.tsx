/** @jsx jsx */
import * as React from "react"
import { jsx, Box, useColorMode } from "theme-ui"

const REPO = `muksmuks/blog`
const UTTERANCES_ORIGIN = `https://utteranc.es`

const themeFor = (colorMode: string) => (colorMode === `dark` ? `github-dark` : `github-light`)

const Utterances = () => {
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const [colorMode] = useColorMode()

  React.useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const script = document.createElement(`script`)
    script.src = `${UTTERANCES_ORIGIN}/client.js`
    script.setAttribute(`repo`, REPO)
    script.setAttribute(`issue-term`, `pathname`)
    script.setAttribute(`theme`, themeFor(colorMode as string))
    script.crossOrigin = `anonymous`
    script.async = true
    container.appendChild(script)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    const iframe = containerRef.current?.querySelector<HTMLIFrameElement>(`.utterances-frame`)
    if (!iframe?.contentWindow) return
    iframe.contentWindow.postMessage({ type: `set-theme`, theme: themeFor(colorMode as string) }, UTTERANCES_ORIGIN)
  }, [colorMode])

  return <Box ref={containerRef} sx={{ mt: 5 }} />
}

export default Utterances
