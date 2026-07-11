/** @jsx jsx */
import * as React from "react"
import { jsx, Box } from "theme-ui"

export const socialButtonSx = {
  display: `inline-flex`,
  alignItems: `center`,
  gap: `6px`,
  fontSize: `12px`,
  fontWeight: `bold`,
  color: `white`,
  bg: `#2c5282`,
  border: `none`,
  borderRadius: `6px`,
  px: 3,
  py: `6px`,
  textDecoration: `none`,
  transition: `all 0.2s ease`,
  "&:hover": { bg: `#4ade80`, color: `#0a0e14` },
}

type SocialButtonProps = {
  href: string
  children: React.ReactNode
}

const SocialButton = ({ href, children }: SocialButtonProps) => (
  <Box as="a" href={href} sx={socialButtonSx}>
    {children}
  </Box>
)

export default SocialButton
