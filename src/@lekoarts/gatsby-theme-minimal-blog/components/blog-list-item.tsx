/** @jsx jsx */
import * as React from "react"
import { jsx, Box } from "theme-ui"
import { Link } from "gatsby"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import tagColor from "../../../utils/tag-color"

type BlogListItemProps = {
  post: {
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
  showTags?: boolean
}

const BlogListItem = ({ post, showTags = true }: BlogListItemProps) => {
  const { basePath, tagsPath } = useMinimalBlogConfig()

  return (
    <Box mb={4}>
      <Link to={post.slug} sx={(t) => ({ ...t.styles?.a, fontSize: [1, 2, 3], color: `text` })}>
        {post.title}
      </Link>
      <p sx={{ color: `secondary`, mt: 1, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
        <time>{post.date}</time>
      </p>
      {post.tags && showTags && post.tags.length > 0 && (
        <Box sx={{ display: `flex`, flexWrap: `wrap`, gap: `6px`, mt: 1 }}>
          {post.tags.map((tag) => (
            <Link
              key={tag.slug}
              to={replaceSlashes(`/${basePath}/${tagsPath}/${tag.slug}`)}
              sx={{
                fontSize: `9px`,
                color: `white`,
                bg: tagColor(tag.name),
                borderRadius: `999px`,
                px: `6px`,
                py: `2px`,
                textDecoration: `none`,
                whiteSpace: `nowrap`,
              }}
            >
              {tag.name}
            </Link>
          ))}
        </Box>
      )}
    </Box>
  )
}

export default BlogListItem
