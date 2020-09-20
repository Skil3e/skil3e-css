import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout/Layout"
import SEO from "../components/seo"

type DataProps = {
    site: {
        buildTime: string
    }
}

const Home: React.FC<PageProps<DataProps>> = ({ data, path }) => (
    <Layout>
        <SEO title="Using TypeScript" />
        <h1>Home</h1>
    </Layout>
)

export default Home

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
