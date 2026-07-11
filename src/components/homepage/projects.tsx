/** @jsx jsx */
import * as React from "react"
import { jsx, Grid, Card, Box } from "theme-ui"
import { Link as TLink } from "theme-ui"
import { projects } from "../../data/homepage"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"

const Projects = () => (
  <section sx={{ mb: [5, 6, 7] }}>
    <Title text="Projects" />
    <Grid gap={4} columns={[1, 2, 2]}>
      {projects.map((project, i) => (
        <Card
          key={`${project.name}-${i}`}
          sx={{ p: 3, borderRadius: `8px`, border: `1px solid`, borderColor: `divide` }}
        >
          <Box sx={{ fontSize: [2, 3], fontWeight: `bold`, color: `heading`, mb: 2 }}>
            {project.url ? (
              <TLink href={project.url} sx={{ color: `heading` }}>
                {project.name}
              </TLink>
            ) : (
              project.name
            )}
          </Box>
          <p sx={{ color: `secondary`, fontSize: [1, 1, 2] }}>{project.description}</p>
          {project.tags.length > 0 && (
            <Box sx={{ display: `flex`, flexWrap: `wrap`, gap: 2, mt: 2 }}>
              {project.tags.map((tag) => (
                <Box
                  key={tag}
                  sx={{
                    fontSize: 0,
                    color: `secondary`,
                    bg: `muted`,
                    borderRadius: `4px`,
                    px: 2,
                    py: 1,
                  }}
                >
                  {tag}
                </Box>
              ))}
            </Box>
          )}
        </Card>
      ))}
    </Grid>
  </section>
)

export default Projects
