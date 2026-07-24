/** @jsx jsx */
import * as React from "react"
import { jsx, Box, Heading, Link as TLink } from "theme-ui"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import Utterances from "../utterances"

type ArticleLayoutProps = {
  title: string
  date: string
  image?: string | null
  sourceUrl?: string | null
  tldr: string[]
  children: React.ReactNode
}

const ArticleLayout = ({ title, date, image, sourceUrl, tldr, children }: ArticleLayoutProps) => (
  <Layout>
    <Heading as="h1" variant="styles.h1">
      {title}
    </Heading>
    <p sx={{ color: `secondary`, mt: 3, fontSize: [1, 1, 2] }}>
      <time>{date}</time>
      {sourceUrl && (
        <React.Fragment>
          {` — `}
          <TLink href={sourceUrl}>Source</TLink>
        </React.Fragment>
      )}
    </p>

    {image && (
      <Box
        as="img"
        src={image}
        alt={title}
        sx={{
          width: `100%`,
          maxHeight: `420px`,
          objectFit: `cover`,
          borderRadius: `8px`,
          boxShadow: `lg`,
          mt: 4,
        }}
      />
    )}

    {tldr.length > 0 && (
      <Box
        sx={{
          mt: 4,
          p: 3,
          borderRadius: `8px`,
          bg: `muted`,
          borderLeft: `4px solid`,
          borderColor: `primary`,
        }}
      >
        <Box sx={{ fontWeight: `bold`, color: `primary`, fontSize: [1, 2], mb: 2 }}>TL;DR</Box>
        <Box as="ul" sx={{ m: 0, pl: 3 }}>
          {tldr.map((point, i) => (
            <li key={i} sx={{ fontSize: [1, 1, 2], color: `text`, mb: 1 }}>
              {point}
            </li>
          ))}
        </Box>
      </Box>
    )}

    <section sx={{ my: 5, variant: `layout.content` }}>{children}</section>

    <Utterances />
  </Layout>
)

export default ArticleLayout
