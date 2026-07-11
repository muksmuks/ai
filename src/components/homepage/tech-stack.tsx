/** @jsx jsx */
import * as React from "react"
import { jsx, Box } from "theme-ui"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import { techStack } from "../../data/homepage"

const TechStack = () => (
  <section sx={{ mb: [3, 4] }}>
    <Title text="Tech Stack" />
    {techStack.map((group) => (
      <Box key={group.category} sx={{ mb: 3 }}>
        <Box sx={{ fontSize: [1, 2], fontWeight: `bold`, color: `heading`, mb: 2 }}>{group.category}</Box>
        <Box sx={{ display: `flex`, flexWrap: `wrap`, gap: 2 }}>
          {group.items.map((item) => (
            <Box
              key={item}
              sx={{
                fontSize: [0, 1],
                color: `secondary`,
                bg: `muted`,
                borderRadius: `999px`,
                px: 3,
                py: 1,
              }}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Box>
    ))}
  </section>
)

export default TechStack
