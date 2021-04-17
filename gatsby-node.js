const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
    {
        allWpPost {
            edges {
                node {
                    id
                    slug
                    status
                }
            }
        }
    }
  `)

    const postTemplate = path.resolve(`./src/templates/post.js`)
    allWpPost.edges.forEach(edge => {
        createPage({
            path: `/blog/${edge.node.slug}/`,
            component: slash(postTemplate),
            context: {
                id: edge.node.id,
            },
        })
    })
}