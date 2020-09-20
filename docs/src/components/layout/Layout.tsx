import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Sidebar from "./Sidebar";
import "../layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Sidebar/>
        <main>{children}</main>
        <footer>
          © {data.site.siteMetadata?.title} {new Date().getFullYear()}
        </footer>

    </>
  )
}

export default Layout
