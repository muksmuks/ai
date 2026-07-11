import * as React from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import ArticleLayout from "../components/state-of-ai/article-layout"
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"

type StateOfAiArticleQuery = {
  stateOfAiArticle: {
    title: string
    date: string
    image: string | null
    sourceUrl: string | null
    tldr: string[]
  }
}

const StateOfAiArticleTemplate: React.FC<React.PropsWithChildren<PageProps<StateOfAiArticleQuery>>> = ({
  data: { stateOfAiArticle },
  children,
}) => (
  <ArticleLayout
    title={stateOfAiArticle.title}
    date={stateOfAiArticle.date}
    image={stateOfAiArticle.image}
    sourceUrl={stateOfAiArticle.sourceUrl}
    tldr={stateOfAiArticle.tldr}
  >
    {children}
  </ArticleLayout>
)

export default StateOfAiArticleTemplate

export const Head: HeadFC<StateOfAiArticleQuery> = ({ data: { stateOfAiArticle } }) => (
  <Seo title={stateOfAiArticle.title} />
)

export const query = graphql`
  query ($slug: String!) {
    stateOfAiArticle(slug: { eq: $slug }) {
      title
      date(formatString: "DD.MM.YYYY")
      image
      sourceUrl
      tldr
    }
  }
`
