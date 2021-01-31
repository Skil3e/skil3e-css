const path = require("path");

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions;
    const {data: {allDocumentation: {nodes}}} = await graphql(`
    {
      allDocumentation {
        nodes {
          filename
          prefix
          utility
          divider
          values {
            key
            val
          }
          variables
        }
      }
    }
  `);


    const docPagesPromise = nodes.map(async (node) => {
        await createPage({
            path: `docs/${node.utility}`,
            component: path.resolve(
                "./src/templates/UtilitiesTemplate.tsx",
            ),
            context: {
                data: node,
                layout: "docs"
            }
        })
    });


    return Promise.all([docPagesPromise])
};

exports.onCreatePage = ({page, actions}) => {
    const {createPage} = actions
    if (page.path.includes("docs")) {
        page.context.layout = "docs"
        createPage(page)
    }
}
