import { graphql } from "gatsby"
import PageComponent, { Head } from "@lekoarts/gatsby-theme-minimal-blog/src/components/page"

export default PageComponent

export { Head }

export const query = graphql`
  query ($slug: String!) {
    page(slug: { eq: $slug }) {
      title
      slug
      excerpt
    }
  }
`
