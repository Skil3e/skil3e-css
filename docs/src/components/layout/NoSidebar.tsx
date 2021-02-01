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
            <div className={ "pt--header" }>
                <main id={ "main" } className={ "min-h--main" }>
                    { children }
                </main>
            </div>

            <Footer className={ "px--md bg--bg h--header flex--center" } siteName={ siteMetadata.title }/>
        </div>
    )
}

export default NoSidebar
