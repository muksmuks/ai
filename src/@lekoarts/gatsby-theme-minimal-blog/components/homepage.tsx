/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import { HeadFC } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import { visuallyHidden } from "@lekoarts/gatsby-theme-minimal-blog/src/styles/utils"
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"
import HeroSection from "../../../components/homepage/hero-section"
import BlogCards, { BlogCardPost } from "../../../components/homepage/blog-cards"
import Contact from "../../../components/homepage/contact"

export type MBHomepageProps = {
  posts: BlogCardPost[]
}

const Homepage = ({ posts }: MBHomepageProps) => {
  const { siteTitle } = useSiteMetadata()

  return (
    <Layout>
      <h1 sx={visuallyHidden}>{siteTitle}</h1>
      <HeroSection mb={[4, 5]} mt={[`-3rem`, `-6rem`]} />
      <Box sx={{ borderTopStyle: `solid`, borderTopWidth: `1px`, borderTopColor: `divide`, mb: 1 }} />
      <BlogCards posts={posts} />
      <Contact />
    </Layout>
  )
}

export default Homepage

export const Head: HeadFC = () => <Seo />
