/** @jsx jsx */
import * as React from "react"
import { jsx, Box } from "theme-ui"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import { experience } from "../../data/homepage"

const Experience = () => (
  <section sx={{ mb: [5, 6, 7] }}>
    <Title text="Experience" />
    {experience.map((item, i) => (
      <Box
        key={`${item.company}-${i}`}
        sx={{ mb: 4, pb: 4, borderBottomStyle: `solid`, borderBottomWidth: `1px`, borderBottomColor: `divide`, "&:last-of-type": { border: `none`, mb: 0, pb: 0 } }}
      >
        <Box sx={{ display: `flex`, justifyContent: `space-between`, flexWrap: `wrap`, alignItems: `baseline` }}>
          <Box sx={{ fontSize: [2, 3], fontWeight: `bold`, color: `heading` }}>{item.role}</Box>
          <Box sx={{ fontSize: 0, color: `secondary` }}>{item.period}</Box>
        </Box>
        <Box sx={{ fontSize: [1, 2], color: `primary`, mb: 2 }}>{item.company}</Box>
        <Box as="ul" sx={{ m: 0, pl: 3 }}>
          {item.bullets.map((bullet, j) => (
            <li key={j} sx={{ fontSize: [1, 1, 2], color: `secondary`, mb: 1 }}>
              {bullet}
            </li>
          ))}
        </Box>
      </Box>
    ))}
  </section>
)

export default Experience
