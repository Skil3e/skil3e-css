const path = require("path");
const fs = require("fs");

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
          withPosition
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

exports.onPreInit = () => {
    if (process.argv[2] === "build") {
        fs.rmdirSync(path.join(__dirname, "website"), { recursive: true })
        fs.renameSync(
            path.join(__dirname, "public"),
            path.join(__dirname, "public_dev")
        )
    }
}

exports.onPostBuild = () => {
    fs.renameSync(path.join(__dirname, "public"), path.join(__dirname, "website"))
    fs.renameSync(
        path.join(__dirname, "public_dev"),
        path.join(__dirname, "public")
    )
}
