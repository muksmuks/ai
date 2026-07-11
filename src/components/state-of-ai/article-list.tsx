/** @jsx jsx */
import * as React from "react"
import { jsx, Box, Card } from "theme-ui"
import { Link, useStaticQuery, graphql } from "gatsby"
import tagColor from "../../utils/tag-color"

type ArticleListQuery = {
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

const ArticleList = () => {
  const data = useStaticQuery<ArticleListQuery>(graphql`
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
    <Box sx={{ display: `grid`, gridTemplateColumns: [`1fr`, `1fr 1fr`], gap: 3, mb: 5 }}>
      {articles.map((article) => (
        <Card
          key={article.slug}
          as={Link}
          to={`/state-of-ai/${article.slug}/`}
          sx={{
            p: 0,
            borderRadius: `8px`,
            overflow: `hidden`,
            border: `1px solid`,
            borderColor: `divide`,
            display: `flex`,
            flexDirection: `column`,
            textDecoration: `none`,
            color: `text`,
          }}
        >
          {article.image ? (
            <Box as="img" src={article.image} alt="" sx={{ width: `100%`, height: `140px`, objectFit: `cover`, display: `block` }} />
          ) : (
            <Box
              sx={{
                width: `100%`,
                height: `140px`,
                background: (t) => `linear-gradient(135deg, ${t.colors?.primary}, ${t.colors?.muted})`,
              }}
            />
          )}
          <Box sx={{ p: 2 }}>
            <Box sx={{ display: `flex`, justifyContent: `space-between`, flexWrap: `wrap`, alignItems: `baseline` }}>
              <Box sx={{ fontSize: `13px`, fontWeight: `bold`, color: `heading` }}>{article.title}</Box>
              <Box sx={{ fontSize: `10px`, color: `secondary` }}>{article.date}</Box>
            </Box>
            {article.tldr[0] && <p sx={{ color: `secondary`, fontSize: `11px`, mt: 1, mb: 1 }}>{article.tldr[0]}</p>}
            {article.tags.length > 0 && (
              <Box sx={{ display: `flex`, flexWrap: `wrap`, gap: 1, mb: 1 }}>
                {article.tags.map((tag) => (
                  <Box
                    key={tag}
                    sx={{
                      fontSize: `9px`,
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
          </Box>
        </Card>
      ))}
    </Box>
  )
}

export default ArticleList
