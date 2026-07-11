/** @jsx jsx */
import * as React from "react"
import { jsx, Grid, Box, Card } from "theme-ui"
import { Link } from "gatsby"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"

const TAG_COLORS = [`blue`, `green`, `purple`, `pink`, `orange`, `teal`, `indigo`, `red`]

const tagColor = (name: string) => {
  const hash = name.split(``).reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return `${TAG_COLORS[hash % TAG_COLORS.length]}.5`
}

export type BlogCardPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  description: string
  timeToRead?: number
  tags?: {
    name: string
    slug: string
  }[]
}

type BlogCardsProps = {
  posts: BlogCardPost[]
}

const BlogCards = ({ posts }: BlogCardsProps) => {
  const { basePath, blogPath, tagsPath } = useMinimalBlogConfig()

  return (
    <section sx={{ mb: [5, 6, 7] }}>
      <Box sx={{ "> div": { pb: 1, mb: [3, 4] } }}>
        <Title text="Blog">
          <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Read all posts</Link>
        </Title>
      </Box>
      <Grid gap={3} columns={[1, 2, 4]}>
        {posts.map((post) => (
          <Card
            key={post.slug}
            sx={{
              p: 0,
              borderRadius: `6px`,
              overflow: `hidden`,
              border: `1px solid`,
              borderColor: `divide`,
              display: `flex`,
              flexDirection: `column`,
            }}
          >
            <Box sx={{ p: 2, display: `flex`, flexDirection: `column`, flex: 1 }}>
              {post.tags && post.tags.length > 0 && (
                <Box sx={{ display: `flex`, flexWrap: `wrap`, gap: `4px`, mb: 1 }}>
                  {post.tags.slice(0, 3).map((tag) => (
                    <Link
                      key={tag.slug}
                      to={replaceSlashes(`/${basePath}/${tagsPath}/${tag.slug}`)}
                      sx={{
                        fontSize: `8px`,
                        color: `white`,
                        bg: tagColor(tag.name),
                        borderRadius: `999px`,
                        px: `6px`,
                        py: `2px`,
                        lineHeight: 1.6,
                        textDecoration: `none`,
                        whiteSpace: `nowrap`,
                      }}
                    >
                      {tag.name}
                    </Link>
                  ))}
                </Box>
              )}
              <Link to={post.slug} sx={(t) => ({ ...t.styles?.a, fontSize: [1, 1], color: `text`, fontWeight: `bold`, lineHeight: `tight` })}>
                {post.title}
              </Link>
              <p sx={{ color: `secondary`, fontSize: `12px`, lineHeight: `body`, flex: 1, mt: 1, mb: 1 }}>
                {post.description || post.excerpt}
              </p>
              <Box sx={{ display: `flex`, justifyContent: `space-between`, alignItems: `center`, fontSize: `10px`, color: `secondary` }}>
                <time>{post.date}</time>
                {post.timeToRead && <span>{Math.round(post.timeToRead)} min read</span>}
              </Box>
            </Box>
          </Card>
        ))}
      </Grid>
    </section>
  )
}

export default BlogCards
