/** @jsx jsx */
import * as React from "react"
import { jsx, Box, Flex } from "theme-ui"
import Hero from "@lekoarts/gatsby-theme-minimal-blog/src/texts/hero.mdx"
import HeroStats from "./hero-stats"

type HeroSectionProps = {
  mb?: number | string | Array<number | string | null>
  mt?: number | string | Array<number | string | null>
}

const HeroSection = ({ mb = [5, 6, 7], mt = 0 }: HeroSectionProps) => (
  <Flex
    as="section"
    sx={{
      mb,
      mt,
      p: { fontSize: [1, 2, 3], mt: 2 },
      variant: `section_hero`,
      flexDirection: [`column-reverse`, `row`],
      alignItems: `center`,
      gap: 4,
    }}
  >
    <Box sx={{ flex: 1 }}>
      <Hero />
      <HeroStats />
    </Box>
    <Box
      sx={{
        flexShrink: 0,
        width: [110, 140, 160],
        height: [110, 140, 160],
        borderRadius: `50%`,
        backgroundImage: (t) => `url(/profile.jpg), linear-gradient(135deg, ${t.colors?.primary}, ${t.colors?.muted})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
      }}
    />
  </Flex>
)

export default HeroSection
