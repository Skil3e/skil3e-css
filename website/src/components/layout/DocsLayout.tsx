import * as React from "react";
import { FC } from "react";
import Sidebar from "./Sidebar";
import DrawerToggle from "./DrawerToggle";
import OnThisPage from "./OnThisPage";
import { joinIgnoreEmpty } from "../../utils";
import "prismjs/components/prism-scss";
import "prismjs/components/prism-bash";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "../../styles/_prism-material-light.scss";
import "../../styles/_prism-styles.scss";

interface IDocsLayout {
    className?: string
    onThisPage?: {
        [key: string]: string
    }
}

const DocsLayout: FC<IDocsLayout> = ( { children, className, onThisPage } ) => {
    const cls = joinIgnoreEmpty( "md:flex--grow content px--xxl pb--xxl", className, onThisPage ? "lg:col--9 " : "lg:col--12" )
    return (
        <>
            <DrawerToggle/>
            <div className={ "container pt--header" }>
                <Sidebar/>
                <div className={ "lg:pl--sidebar min-h--main-nofooter lg:flex" }>
                    <main id={ "main" } className={ cls }>
                        { children }
                    </main>
                    { onThisPage &&
                    <aside className={ "none lg:block lg:col--3 py--md" }>
                        <div className={ "fixed" }>
                            <OnThisPage paths={ onThisPage }/>
                        </div>
                    </aside>
                    }
                </div>
            </div>
        </>
    )
}

export default DocsLayout
