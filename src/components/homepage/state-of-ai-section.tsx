/** @jsx jsx */
import * as React from "react"
import { jsx, Box, Card } from "theme-ui"
import { Link, useStaticQuery, graphql } from "gatsby"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import Carousel from "./carousel"
import tagColor from "../../utils/tag-color"

type StateOfAiSectionQuery = {
  allStateOfAiArticle: {
    nodes: {
      slug: string
      title: string
      date: string
      image: string | null
      tldr: string[]
      tags: string[]
    }[]
  }
}

const ArticleCard = (article: StateOfAiSectionQuery[`allStateOfAiArticle`][`nodes`][number]) => (
  <Card
    as={Link}
    to={`/state-of-ai/${article.slug}/`}
    sx={{
      p: 0,
      borderRadius: `6px`,
      overflow: `hidden`,
      border: `1px solid`,
      borderColor: `divide`,
      display: `flex`,
      flexDirection: `column`,
      height: `100%`,
      textDecoration: `none`,
      color: `text`,
    }}
  >
    {article.image ? (
      <Box as="img" src={article.image} alt="" sx={{ width: `100%`, height: `90px`, objectFit: `cover`, display: `block` }} />
    ) : (
      <Box
        sx={{
          width: `100%`,
          height: `90px`,
          background: (t) => `linear-gradient(135deg, ${t.colors?.primary}, ${t.colors?.muted})`,
        }}
      />
    )}
    <Box sx={{ p: 2, display: `flex`, flexDirection: `column`, flex: 1 }}>
      {article.tags.length > 0 && (
        <Box sx={{ display: `flex`, flexWrap: `wrap`, gap: `4px`, mb: 1 }}>
          {article.tags.slice(0, 3).map((tag) => (
            <Box
              key={tag}
              sx={{
                fontSize: `8px`,
                color: `white`,
                bg: tagColor(tag),
                borderRadius: `999px`,
                px: `6px`,
                py: `2px`,
              }}
            >
              {tag}
            </Box>
          ))}
        </Box>
      )}
      <Box sx={{ fontSize: [1, 1], color: `text`, fontWeight: `bold`, lineHeight: `tight` }}>{article.title}</Box>
      {article.tldr[0] && (
        <p sx={{ color: `secondary`, fontSize: `12px`, lineHeight: `body`, flex: 1, mt: 1, mb: 1 }}>{article.tldr[0]}</p>
      )}
      <Box sx={{ fontSize: `10px`, color: `secondary` }}>
        <time>{article.date}</time>
      </Box>
    </Box>
  </Card>
)

const StateOfAiSection = () => {
  const data = useStaticQuery<StateOfAiSectionQuery>(graphql`
    query {
      allStateOfAiArticle(sort: { date: DESC }) {
        nodes {
          slug
          title
          date(formatString: "DD.MM.YYYY")
          image
          tldr
          tags
        }
      }
    }
  `)

  const articles = data.allStateOfAiArticle.nodes

  if (articles.length === 0) return null

  return (
    <section sx={{ mb: [3, 4] }}>
      <Box sx={{ "> div": { pb: 1, mb: [3, 4] } }}>
        <Title text="State of AI">
          <Link to="/state-of-ai/">Read all articles</Link>
        </Title>
      </Box>
      <Carousel
        items={articles}
        getKey={(item) => item.slug}
        basis={[`88%`, `46%`, `31%`]}
        manual
        renderItem={(item) => <ArticleCard {...item} />}
      />
    </section>
  )
}

export default StateOfAiSection
