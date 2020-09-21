import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"
import SEO from "../../../components/seo"

type DataProps = {
    site: {
        buildTime: string
    }
}

const Homepage: React.FC<PageProps<DataProps>> = ({ data, path }) => (
    <main className={"container mx--auto"}>
        <SEO title="Documentation" />
        <h1>Introduction</h1>
        <p className={"w--80ch"}>Skil3e-css a simple modular css utility framework. It utilizes the new SASS <a href="https://sass-lang.com/documentation/at-rules">at-rules</a> that allows you to use only the parts you need, the way you need them.</p>
        <h2>Why slil3e-css</h2>
        <p className={"w--80ch"}>Skil3e-css can be used with all kinds of projects and in combination with front-end javascript framework (e.g. React, Angular, Vue, etc.) because it includes purely CSS.</p>
        <p className={"w--80ch"}>You can choose which utilities and components you need and you can easily modify them according to your needs.</p>
    </main>
)

export default Homepage
