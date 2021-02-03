import * as React from "react";
import { FC } from "react";
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from "gatsby";
import { useTheme } from "../ThemeProvide";
import Header from "./Header";
import "../../styles/styles.scss"
import NoSidebar from "./NoSidebar";
import DocsLayout from "./DocsLayout";

interface ILayout {
    className?: string
    noFooter?: boolean
    pageContext: {
        layout: string
    }
}

const Layout: FC<ILayout> = ( { children, pageContext } ) => {
    const { theme } = useTheme()
    const { site: { siteMetadata } } = useStaticQuery( graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }` )
    return (
        <>
            <Helmet bodyAttributes={ { "data-theme": theme } }/>
            <div className={ "bg--bgDimmed text--center" }>
                <a className={ "sr-only-focusable" } href={ "#main" }><span className={ "inline-block my--md" }>Skip to main</span></a>
            </div>
            <Header className={ "flex--center h--header bg--bg fixed w--100 z--7" }/>
            { pageContext.layout === "docs"
                ? <DocsLayout>{ children }</DocsLayout>
                : <NoSidebar siteMetadata={ siteMetadata }>{ children }</NoSidebar>
            }
        </>
    )
}

export default Layout
