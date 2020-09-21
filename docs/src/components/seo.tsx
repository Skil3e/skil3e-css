import * as React from "react";
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface ISeo {
    description?: string
    lang?: string
    meta?: []
    title?: string
    slug?: string
    image?: string
}

const SEO: React.FC<ISeo> = ( { description, lang, meta, slug, title, image } ) => {
    const { site } = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
    )

    const metaDescription = description || site.siteMetadata.description
    const defaultTitle = site.siteMetadata?.title

    return (
        <Helmet
            htmlAttributes={ {
                lang,
            } }
            title={ title }
            titleTemplate={ defaultTitle ? `%s | ${ defaultTitle }` : null }
            meta={ [
                {
                    name   : `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content : title,
                },
                {
                    property: `og:description`,
                    content : metaDescription,
                },
                {
                    property: `og:type`,
                    content : `website`,
                },
                {
                    name   : `twitter:card`,
                    content: `summary`,
                },
                {
                    name   : `twitter:creator`,
                    content: site.siteMetadata?.author || ``,
                },
                {
                    name   : `twitter:title`,
                    content: title,
                },
                {
                    name   : `twitter:description`,
                    content: metaDescription,
                },
            ].concat( meta ) }
        />
    )
}

SEO.defaultProps = {
    lang       : `en`,
    meta       : [],
    description: ``,
}

export default SEO
