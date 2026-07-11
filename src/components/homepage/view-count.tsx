/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"

const NAMESPACE = `ai-mukeshkr-me`
const KEY = `site-views`

const ViewCount = () => {
  const [count, setCount] = React.useState<number | null>(null)

  React.useEffect(() => {
    fetch(`https://abacus.jasoncameron.dev/hit/${NAMESPACE}/${KEY}`)
      .then((res) => res.json())
      .then((data) => setCount(data.value))
      .catch(() => setCount(null))
  }, [])

  if (count === null) return null

  return <span>{count.toLocaleString()} views</span>
}

export default ViewCount
