/** @jsx jsx */
import * as React from "react"
import { jsx, Card, Box } from "theme-ui"
import { Link as TLink } from "theme-ui"
import { projects, ProjectItem } from "../../data/homepage"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import Carousel from "./carousel"

const ProjectCard = (project: ProjectItem) => (
  <Card sx={{ p: 2, borderRadius: `8px`, border: `1px solid`, borderColor: `divide`, height: `100%` }}>
    <Box sx={{ fontSize: `13px`, fontWeight: `bold`, color: `heading`, mb: 1 }}>
      {project.url ? (
        <TLink href={project.url} sx={{ color: `heading` }}>
          {project.name}
        </TLink>
      ) : (
        project.name
      )}
    </Box>
    <p sx={{ color: `secondary`, fontSize: `11px` }}>{project.description}</p>
    {project.tags.length > 0 && (
      <Box sx={{ display: `flex`, flexWrap: `wrap`, gap: 1, mt: 1 }}>
        {project.tags.map((tag) => (
          <Box
            key={tag}
            sx={{
              fontSize: `9px`,
              color: `secondary`,
              bg: `muted`,
              borderRadius: `4px`,
              px: 1,
              py: `2px`,
            }}
          >
            {tag}
          </Box>
        ))}
      </Box>
    )}
  </Card>
)

const Projects = () => (
  <section sx={{ mb: [3, 4] }}>
    <Title text="Projects" />
    <Carousel
      items={projects}
      getKey={(item, i) => `${item.name}-${i}`}
      basis={[`75%`, `45%`, `32%`]}
      renderItem={(item) => <ProjectCard {...item} />}
    />
  </section>
)

export default Projects
