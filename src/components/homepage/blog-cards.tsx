/** @jsx jsx */
import * as React from "react"
import { jsx, Grid, Box, Card } from "theme-ui"
import { Link } from "gatsby"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"

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
  banner?: {
    publicURL: string
  } | null
}

type BlogCardsProps = {
  posts: BlogCardPost[]
}

const BlogCards = ({ posts }: BlogCardsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()

  return (
    <section sx={{ mb: [5, 6, 7] }}>
      <Title text="Blog">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Read all posts</Link>
      </Title>
      <Grid gap={3} columns={[1, 2, 3]}>
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
            {post.banner?.publicURL ? (
              <Box
                as="img"
                src={post.banner.publicURL}
                alt=""
                sx={{ width: `100%`, height: `90px`, objectFit: `cover`, display: `block` }}
              />
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
              {post.tags && post.tags.length > 0 && (
                <Box sx={{ fontSize: `10px`, color: `secondary`, mb: 1, a: { color: `secondary` } }}>
                  <ItemTags tags={post.tags} />
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
