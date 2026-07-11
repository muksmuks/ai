/** @jsx jsx */
import * as React from "react"
import { jsx, Box, Card } from "theme-ui"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import Carousel from "./carousel"
import { experience, ExperienceItem } from "../../data/homepage"

const ExperienceCard = (item: ExperienceItem) => (
  <Card sx={{ p: 2, borderRadius: `8px`, border: `1px solid`, borderColor: `divide`, height: `100%` }}>
    <Box sx={{ display: `flex`, justifyContent: `space-between`, flexWrap: `wrap`, alignItems: `baseline` }}>
      <Box sx={{ fontSize: `13px`, fontWeight: `bold`, color: `heading` }}>{item.role}</Box>
      <Box sx={{ fontSize: `10px`, color: `secondary` }}>{item.period}</Box>
    </Box>
    <Box sx={{ fontSize: `12px`, color: `primary`, mb: 1 }}>{item.company}</Box>
    <Box as="ul" sx={{ m: 0, pl: 3 }}>
      {item.bullets.map((bullet, j) => (
        <li key={j} sx={{ fontSize: `11px`, color: `secondary`, mb: 1 }}>
          {bullet}
        </li>
      ))}
    </Box>
  </Card>
)

const Experience = () => (
  <section sx={{ mb: [3, 4] }}>
    <Title text="Experience" />
    <Carousel
      items={experience}
      getKey={(item, i) => `${item.company}-${i}`}
      basis={[`75%`, `45%`, `32%`]}
      renderItem={(item) => <ExperienceCard {...item} />}
    />
  </section>
)

export default Experience
