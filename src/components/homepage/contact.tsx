/** @jsx jsx */
import * as React from "react"
import { jsx, Box } from "theme-ui"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import { contact } from "../../data/homepage"
import { LinkedInIcon, TwitterIcon } from "./icons"
import SocialButton from "./social-button"

const Contact = () => {
  const { externalLinks } = useMinimalBlogConfig()
  const linkedIn = externalLinks?.find((link) => link.name === `LI`)
  const twitter = externalLinks?.find((link) => link.name === `Twitter`)

  return (
    <section sx={{ mb: [3, 4] }}>
      <Title text="Contact" />
      <Box sx={{ display: `flex`, flexWrap: `wrap`, gap: 2 }}>
        {linkedIn && (
          <SocialButton href={linkedIn.url}>
            <LinkedInIcon />
            LinkedIn
          </SocialButton>
        )}
        {twitter && (
          <SocialButton href={twitter.url}>
            <TwitterIcon />
            Twitter
          </SocialButton>
        )}
        <SocialButton href={`mailto:${contact.email}`}>Email</SocialButton>
      </Box>
    </section>
  )
}

export default Contact
