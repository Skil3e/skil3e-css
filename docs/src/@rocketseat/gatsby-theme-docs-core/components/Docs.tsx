import * as React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import SEO from '../../../components/seo';
import { toSlug } from "../../../components/util";

export default function Docs( { data: { mdx }, pageContext } ) {
    const { title, description, image } = mdx.frontmatter;
    const { headings, body } = mdx;
    const { slug } = mdx.fields;
    return (
        <main>
            <SEO title={ title } description={ description } slug={ slug } image={ image }/>
            <div className={ "flex flex--wrap" }>

                <div className={ "col--12 lg:col--9 pr--md content" }>
                    <h1>{ title } </h1>
                    <MDXRenderer>{ body }</MDXRenderer>
                </div>
                <aside className={ "col--12 lg:col--3 pl--md mt--xxl" }>
                    <nav className={ "sticky top--0" }>
                        <h3 className={ "p--xs" }>On this page</h3>
                        <ul>
                            { headings && headings.map( h => {
                                return (
                                    <li key={ h.value }>
                                        <a className={ "flex p--xs" } href={ `#${ toSlug( h.value ) }` }>{ h.value }</a>
                                    </li>
                                )
                            } ) }
                        </ul>
                    </nav>
                </aside>
            </div>
        </main>
    );
}
