import path from "path"
import type { GatsbyNode } from "gatsby"

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type StateOfAiArticle implements Node {
      title: String!
      slug: String!
      date: Date! @dateformat
      image: String
      sourceUrl: String
      tldr: [String!]!
      tags: [String!]!
      body: String!
    }
  `)
}

export const onCreateNode: GatsbyNode["onCreateNode"] = ({ node, actions, getNode }) => {
  const { createNode, createParentChildLink } = actions

  if (node.internal.type !== `Mdx`) return

  const fileNode = getNode(node.parent as string)
  if (!fileNode || fileNode.sourceInstanceName !== `state-of-ai`) return

  const frontmatter = node.frontmatter as {
    title: string
    slug: string
    date: string
    image?: string
    sourceUrl?: string
    tldr?: string[]
    tags?: string[]
  }

  createNode({
    id: `${node.id} >>> StateOfAiArticle`,
    parent: node.id,
    children: [],
    internal: {
      type: `StateOfAiArticle`,
      contentDigest: node.internal.contentDigest,
    },
    title: frontmatter.title,
    slug: frontmatter.slug,
    date: frontmatter.date,
    image: frontmatter.image || null,
    sourceUrl: frontmatter.sourceUrl || null,
    tldr: frontmatter.tldr || [],
    tags: frontmatter.tags || [],
    body: node.body,
    contentFilePath: fileNode.absolutePath,
  })

  createParentChildLink({ parent: node, child: getNode(`${node.id} >>> StateOfAiArticle`)! })
}

export const createPages: GatsbyNode["createPages"] = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql<{
    allStateOfAiArticle: { nodes: { slug: string; contentFilePath: string }[] }
  }>(`
    {
      allStateOfAiArticle {
        nodes {
          slug
          contentFilePath
        }
      }
    }
  `)

  if (result.errors || !result.data) {
    reporter.panicOnBuild(`Error loading State of AI articles`, result.errors)
    return
  }

  const template = path.resolve(`./src/templates/state-of-ai-article.tsx`)

  result.data.allStateOfAiArticle.nodes.forEach((article) => {
    createPage({
      path: `/state-of-ai/${article.slug}/`,
      component: `${template}?__contentFilePath=${article.contentFilePath}`,
      context: {
        slug: article.slug,
      },
    })
  })
}
