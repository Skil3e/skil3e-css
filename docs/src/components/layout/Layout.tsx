import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header/Header"
import Sidebar from "./Sidebar";
import "../../css/layout.scss"
import { useLocation } from "@reach/router"

const Layout = ( { children } ) => {
    const data = useStaticQuery( graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  ` )
    const location = useLocation();
    return (
        <>
            <Header siteTitle={ data.site.siteMetadata?.title || `Title` }/>
            { location.pathname != "/"
                ?
                <div className={ "flex flex--wrap container mx--auto" }>
                    <Sidebar className={ "col--12 lg:col--3 pr--md" }/>
                    <div className={ "col--12 lg:col--9 pl--md" }>
                        { children }
                    </div>
                </div>
                : <>{ children }</>
            }
            <footer className={ "flex al__it--center h--header px--md bg--bg" }>
                © { data.site.siteMetadata?.title } { new Date().getFullYear() }
            </footer>

        </>
    )
}

export default Layout
