import { graphql } from "gatsby"
import Post, { Head } from "@lekoarts/gatsby-theme-minimal-blog/src/components/post"

export default Post

export { Head }

export const query = graphql`
  query ($slug: String!, $formatString: String!) {
    post(slug: { eq: $slug }) {
      slug
      title
      date(formatString: $formatString)
      tags {
        name
        slug
      }
      description
      canonicalUrl
      excerpt
      timeToRead
      banner {
        childImageSharp {
          resize(width: 1200, quality: 90) {
            src
          }
        }
      }
    }
  }
`
