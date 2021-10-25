const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const pageIndex = path.resolve('./src/templates/index.tsx');
    resolve(
      graphql(
        `
          {
            allContentfulJessePage {
              edges {
                node {
                  slug
                  id
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }
        result.data.allContentfulJessePage.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: pageIndex,
            context: {
              slug: edge.node.slug,
              id: edge.node.id
            }
          });
        });
      })
    );
  });
};
