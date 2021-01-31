import * as React from "react";
import { FC } from "react";
import Footer from "./Footer";

interface INoSidebar {
    siteMetadata: {
        title: string
    }
}

const NoSidebar: FC<INoSidebar> = ( { children, siteMetadata } ) => {
    return (
        <div>
            <div className={ "container pt--header" }>
                <main id={ "main" } className={ "min-h--main p--md" }>
                    { children }
                </main>
            </div>

            <Footer className={ "p--md bg--bg" } siteName={ siteMetadata.title }/>
        </div>
    )
}

export default NoSidebar
