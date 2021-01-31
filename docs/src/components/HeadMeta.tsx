import * as React from "react";
import { FC } from "react";
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from "gatsby";

interface IHeadMeta {
    title?: string
    description?: string
    image?: string
    type?: "website"
    pathname?: string
}

const HeadMeta: FC<IHeadMeta> = ( { title, description, image, type, pathname } ) => {
    const { site: { siteMetadata }, ogImage: { childImageSharp: { original: { src } } } } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
            ogImage: file(relativePath: {eq: "og-fallback.jpg"}) {
              childImageSharp {
                original {
                  src
                }
              }
            }
          }
        `
    )
    const url = siteMetadata.domain + (pathname ?? "");
    const pageTitle = `${ title } | ${ siteMetadata.title }`
    const pageDescription = description ?? siteMetadata.description;
    const imageWithFallback = image ?? (siteMetadata.domain + src)

    return (
        <Helmet>
            <title>{ pageTitle }</title>
            <meta name="title" content={ pageTitle }/>
            <meta name="description" content={ pageDescription }/>
            <meta property="og:type" content={ type ?? "website" }/>
            <meta property="og:url" content={ url }/>
            <meta property="og:title" content={ pageTitle }/>
            <meta property="og:description" content={ pageDescription }/>
            <meta property="og:image" content={ imageWithFallback }/>
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={ url }/>
            <meta property="twitter:title" content={ pageTitle }/>
            <meta property="twitter:description" content={ pageDescription }/>
            <meta property="twitter:image" content={ imageWithFallback }/>
        </Helmet>
    )
}

export default HeadMeta
