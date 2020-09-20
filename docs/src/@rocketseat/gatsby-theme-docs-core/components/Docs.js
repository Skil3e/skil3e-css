import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../../../components/layout/Layout';
import SEO from '../../../components/seo';

export default function Docs({ data: { mdx }, pageContext }) {
    console.log(pageContext)
    // const { prev, next, githubEditUrl } = pageContext;
    const { title, description, image } = mdx.frontmatter;
    const { headings, body } = mdx;
    const { slug } = mdx.fields;

    return (
        <>
            <SEO title={title} description={description} slug={slug} image={image} />
            <Layout
                title={title}
                headings={headings}
            >
                <MDXRenderer>{body}</MDXRenderer>

            </Layout>
        </>
    );
}
