/** @jsx jsx */
import * as React from "react"
import { jsx, Box, Flex } from "theme-ui"
import { heroStats } from "../../data/homepage"

const accent = `#4ade80`
const dim = `#9ca3af`

const Divider = () => <Box sx={{ width: `1px`, alignSelf: `stretch`, bg: `rgba(255, 255, 255, 0.15)` }} />

const HeroStats = () => (
  <Flex
    sx={{
      mt: 4,
      bg: `#0a0e14`,
      borderRadius: `10px`,
      px: [3, 4],
      py: 3,
      alignItems: `center`,
      flexWrap: `wrap`,
      rowGap: 3,
      columnGap: [3, 4],
    }}
  >
    {heroStats.map((stat, i) => (
      <React.Fragment key={stat.label}>
        {i > 0 && <Divider />}
        <Flex sx={{ alignItems: `baseline`, gap: 2, whiteSpace: `nowrap` }}>
          {stat.value ? (
            <React.Fragment>
              <Box as="span" sx={{ color: accent, fontWeight: `bold`, fontSize: [1, 2] }}>
                {stat.value}
              </Box>
              <Box as="span" sx={{ color: dim, fontSize: 0 }}>
                {stat.label}
              </Box>
            </React.Fragment>
          ) : (
            <Box as="span" sx={{ color: accent, fontWeight: `bold`, fontSize: 0 }}>
              {stat.label}
            </Box>
          )}
        </Flex>
      </React.Fragment>
    ))}
  </Flex>
)

export default HeroStats
