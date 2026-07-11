/** @jsx jsx */
import * as React from "react"
import { jsx, Box } from "theme-ui"

const DAYS = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`]

const SCHEDULE: Record<string, { label: string; color: string }> = {
  Tue: { label: `Hot in AI`, color: `blue.5` },
  Fri: { label: `New Product`, color: `green.5` },
  Sun: { label: `Research Paper`, color: `purple.5` },
}

const ReleaseCalendar = () => (
  <Box sx={{ mb: [4, 5] }}>
    <Box sx={{ display: `grid`, gridTemplateColumns: `repeat(7, 1fr)`, gap: 2 }}>
      {DAYS.map((day) => {
        const release = SCHEDULE[day]
        return (
          <Box
            key={day}
            sx={{
              textAlign: `center`,
              borderRadius: `8px`,
              border: `1px solid`,
              borderColor: `divide`,
              py: 2,
              px: 1,
              bg: release ? undefined : `transparent`,
            }}
          >
            <Box sx={{ fontSize: `10px`, color: `secondary`, mb: 1 }}>{day}</Box>
            {release ? (
              <Box
                sx={{
                  fontSize: [`8px`, `9px`],
                  fontWeight: `bold`,
                  color: `white`,
                  bg: release.color,
                  borderRadius: `4px`,
                  py: `4px`,
                  px: `2px`,
                  lineHeight: 1.3,
                }}
              >
                {release.label}
              </Box>
            ) : (
              <Box sx={{ fontSize: `10px`, color: `divide` }}>—</Box>
            )}
          </Box>
        )
      })}
    </Box>
  </Box>
)

export default ReleaseCalendar
