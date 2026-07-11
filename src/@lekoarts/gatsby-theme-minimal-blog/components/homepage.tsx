/** @jsx jsx */
import { jsx, Box, Flex } from "theme-ui"
import { HeadFC } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import { visuallyHidden } from "@lekoarts/gatsby-theme-minimal-blog/src/styles/utils"
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"
import Hero from "../texts/hero.mdx"
import BlogCards, { BlogCardPost } from "../../../components/homepage/blog-cards"
import Experience from "../../../components/homepage/experience"
import Projects from "../../../components/homepage/projects"
import Education from "../../../components/homepage/education"
import TechStack from "../../../components/homepage/tech-stack"
import Credentials from "../../../components/homepage/credentials"
import Contact from "../../../components/homepage/contact"

export type MBHomepageProps = {
  posts: BlogCardPost[]
}

const Homepage = ({ posts }: MBHomepageProps) => {
  const { siteTitle } = useSiteMetadata()

  return (
    <Layout>
      <h1 sx={visuallyHidden}>{siteTitle}</h1>
      <Flex
        as="section"
        sx={{
          mb: [5, 6, 7],
          p: { fontSize: [1, 2, 3], mt: 2 },
          variant: `section_hero`,
          flexDirection: [`column-reverse`, `row`],
          alignItems: `center`,
          gap: 4,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Hero />
        </Box>
        <Box
          sx={{
            flexShrink: 0,
            width: [140, 180, 220],
            height: [140, 180, 220],
            borderRadius: `50%`,
            backgroundImage: (t) => `url(/profile.jpg), linear-gradient(135deg, ${t.colors?.primary}, ${t.colors?.muted})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
          }}
        />
      </Flex>
      <BlogCards posts={posts} />
      <Experience />
      <Projects />
      <Education />
      <TechStack />
      <Credentials />
      <Contact />
    </Layout>
  )
}

export default Homepage

export const Head: HeadFC = () => <Seo />
