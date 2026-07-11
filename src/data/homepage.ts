// Placeholder content for the landing page sections below the blog.
// Replace the TODO values with your real information — no code changes needed elsewhere.

export type ExperienceItem = {
  company: string
  role: string
  period: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: `TODO: Company Name`,
    role: `TODO: Role / Title`,
    period: `TODO: 2023 — Present`,
    bullets: [`TODO: Key responsibility or achievement`, `TODO: Key responsibility or achievement`],
  },
  {
    company: `TODO: Company Name`,
    role: `TODO: Role / Title`,
    period: `TODO: 2020 — 2023`,
    bullets: [`TODO: Key responsibility or achievement`, `TODO: Key responsibility or achievement`],
  },
]

export type ProjectItem = {
  name: string
  description: string
  url?: string
  tags: string[]
}

export const projects: ProjectItem[] = [
  {
    name: `TODO: Project Name`,
    description: `TODO: One or two sentence description of what this project does and why it matters.`,
    url: undefined,
    tags: [`TODO: Tag`],
  },
  {
    name: `TODO: Project Name`,
    description: `TODO: One or two sentence description of what this project does and why it matters.`,
    url: undefined,
    tags: [`TODO: Tag`],
  },
]

export type EducationItem = {
  institution: string
  degree: string
  period: string
}

export const education: EducationItem[] = [
  {
    institution: `TODO: BITS, Pilani`,
    degree: `TODO: Masters in AI & ML`,
    period: `TODO: Year — Year`,
  },
]

export type TechStackCategory = {
  category: string
  items: string[]
}

export const techStack: TechStackCategory[] = [
  { category: `Languages`, items: [`TODO: Python`, `TODO: TypeScript`] },
  { category: `ML / AI`, items: [`TODO: PyTorch`, `TODO: LangChain`] },
  { category: `Infrastructure`, items: [`TODO: AWS`, `TODO: Docker`] },
]

export type CredentialStat = {
  label: string
  value: string
}

export const credentialStats: CredentialStat[] = [
  { label: `Patents`, value: `TODO` },
  { label: `Awards`, value: `TODO` },
  { label: `Products shipped`, value: `TODO` },
]

export type CredentialItem = {
  title: string
  issuer?: string
  year?: string
}

export const credentials: CredentialItem[] = [
  { title: `TODO: Credential / Award / Certification`, issuer: `TODO: Issuer`, year: `TODO: Year` },
]

export const contact = {
  email: `TODO@example.com`,
}
