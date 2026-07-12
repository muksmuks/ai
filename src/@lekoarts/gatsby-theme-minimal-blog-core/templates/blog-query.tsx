import * as React from "react"
import { graphql, HeadFC } from "gatsby"
import Blog, { Head as BlogHead } from "@lekoarts/gatsby-theme-minimal-blog/src/components/blog"

type BlogQueryProps = {
  data: {
    allPost: {
      nodes: any[]
    }
  }
}

const BlogQuery = ({ data }: BlogQueryProps) => <Blog posts={data.allPost.nodes} />

export default BlogQuery

export const Head: HeadFC = BlogHead

export const query = graphql`
  query ($formatString: String!) {
    allPost(sort: { date: DESC }) {
      nodes {
        slug
        title
        date(formatString: $formatString)
        excerpt
        timeToRead
        description
        tags {
          name
          slug
        }
      }
    }
  }
`
