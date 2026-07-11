/** @jsx jsx */
import * as React from "react"
import { jsx, Box, Card } from "theme-ui"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import Carousel from "./carousel"
import { education, EducationItem } from "../../data/homepage"

const EducationCard = (item: EducationItem) => (
  <Card sx={{ p: 2, borderRadius: `8px`, border: `1px solid`, borderColor: `divide`, height: `100%` }}>
    <Box sx={{ display: `flex`, justifyContent: `space-between`, flexWrap: `wrap`, alignItems: `baseline` }}>
      <Box sx={{ fontSize: `12px`, fontWeight: `bold`, color: `heading` }}>{item.institution}</Box>
      <Box sx={{ fontSize: `10px`, color: `secondary` }}>{item.period}</Box>
    </Box>
    <Box sx={{ fontSize: `11px`, color: `secondary`, mt: 1 }}>{item.degree}</Box>
  </Card>
)

const Education = () => (
  <section sx={{ mb: [3, 4] }}>
    <Title text="Education" />
    <Carousel
      items={education}
      getKey={(item, i) => `${item.institution}-${i}`}
      basis={[`75%`, `45%`, `32%`]}
      renderItem={(item) => <EducationCard {...item} />}
    />
  </section>
)

export default Education
