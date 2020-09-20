import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"
import SEO from "../../../components/seo"

type DataProps = {
    site: {
        buildTime: string
    }
}

const Homepage: React.FC<PageProps<DataProps>> = ({ data, path }) => (
    <main>
        <SEO title="Documentation" />
        <h1>Documentation</h1>
    </main>
)

export default Homepage
