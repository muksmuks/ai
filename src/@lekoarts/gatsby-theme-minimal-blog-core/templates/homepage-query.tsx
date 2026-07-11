import * as React from "react"
import { graphql, HeadFC } from "gatsby"
import Homepage, { Head as HomepageHead } from "@lekoarts/gatsby-theme-minimal-blog/src/components/homepage"

type HomepageQueryProps = {
  data: {
    allPost: {
      nodes: any[]
    }
  }
}

const HomepageQuery = ({ data }: HomepageQueryProps) => <Homepage posts={data.allPost.nodes} />

export default HomepageQuery

export const Head: HeadFC = HomepageHead

export const query = graphql`
  query ($formatString: String!) {
    allPost(sort: { date: DESC }, limit: 4) {
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
        banner {
          publicURL
        }
      }
    }
  }
`
