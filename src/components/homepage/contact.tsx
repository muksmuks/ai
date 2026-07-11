/** @jsx jsx */
import * as React from "react"
import { jsx, Box, Link as TLink } from "theme-ui"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import { contact } from "../../data/homepage"

const Contact = () => {
  const { externalLinks } = useMinimalBlogConfig()

  return (
    <section sx={{ mb: [5, 6, 7] }}>
      <Title text="Contact" />
      <p sx={{ fontSize: [1, 2], color: `secondary`, mb: 3 }}>
        Reach out at <TLink href={`mailto:${contact.email}`}>{contact.email}</TLink>
      </p>
      {externalLinks && externalLinks.length > 0 && (
        <Box sx={{ "a:not(:first-of-type)": { ml: 3 }, fontSize: [1, 2] }}>
          {externalLinks.map((link) => (
            <TLink key={link.url} href={link.url}>
              {link.name}
            </TLink>
          ))}
        </Box>
      )}
    </section>
  )
}

export default Contact
