/** @jsx jsx */
import * as React from "react"
import { jsx, Box, Grid } from "theme-ui"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import { credentialStats, credentials } from "../../data/homepage"

const Credentials = () => (
  <section sx={{ mb: [5, 6, 7] }}>
    <Title text="Credentials" />
    <Grid gap={4} columns={[1, credentialStats.length]} sx={{ mb: 4 }}>
      {credentialStats.map((stat) => (
        <Box key={stat.label} sx={{ textAlign: `center` }}>
          <Box sx={{ fontSize: [4, 5], fontWeight: `bold`, color: `primary` }}>{stat.value}</Box>
          <Box sx={{ fontSize: [0, 1], color: `secondary` }}>{stat.label}</Box>
        </Box>
      ))}
    </Grid>
    <Box as="ul" sx={{ m: 0, p: 0 }}>
      {credentials.map((item, i) => (
        <li
          key={`${item.title}-${i}`}
          sx={{
            listStyle: `none`,
            display: `flex`,
            justifyContent: `space-between`,
            flexWrap: `wrap`,
            py: 2,
            borderBottomStyle: `solid`,
            borderBottomWidth: `1px`,
            borderBottomColor: `divide`,
            fontSize: [1, 1, 2],
          }}
        >
          <span sx={{ color: `text` }}>{item.title}</span>
          <span sx={{ color: `secondary` }}>
            {[item.issuer, item.year].filter(Boolean).join(` — `)}
          </span>
        </li>
      ))}
    </Box>
  </section>
)

export default Credentials
