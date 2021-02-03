module.exports = {
    siteMetadata: {
        title: "skil3e CSS Docs",
        description: "A simple CSS utility framework with dark and light mode.",
        siteUrl: process.env.NODE_ENV === "production" ? "https://skil3e.github.io/skil3e-css" : "http://localhost:8000"
    },
    pathPrefix: "/skil3e-css",
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        // "gatsby-plugin-offline",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "generated",
                path: "./src/generated/",
            },
            __key: "documentation",
        },
        {
            resolve: `gatsby-transformer-json`,
            options: {
                typeName: `documentation`, // a fixed string
            },
        },
    ],
};
