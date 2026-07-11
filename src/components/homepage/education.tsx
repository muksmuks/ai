/** @jsx jsx */
import * as React from "react"
import { jsx, Box } from "theme-ui"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import { education } from "../../data/homepage"

const Education = () => (
  <section sx={{ mb: [5, 6, 7] }}>
    <Title text="Education" />
    {education.map((item, i) => (
      <Box
        key={`${item.institution}-${i}`}
        sx={{ display: `flex`, justifyContent: `space-between`, flexWrap: `wrap`, alignItems: `baseline`, mb: 3 }}
      >
        <Box>
          <Box sx={{ fontSize: [1, 2], fontWeight: `bold`, color: `heading` }}>{item.institution}</Box>
          <Box sx={{ fontSize: [1, 1, 2], color: `secondary` }}>{item.degree}</Box>
        </Box>
        <Box sx={{ fontSize: 0, color: `secondary` }}>{item.period}</Box>
      </Box>
    ))}
  </section>
)

export default Education
