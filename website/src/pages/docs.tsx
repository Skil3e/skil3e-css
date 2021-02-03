import * as React from "react";
import { FC } from "react";

import GroupHeading from "../components/GroupHeading";
import CodeHighlight from "../components/CodeHighlight";
import { usePrism } from "../utils";
import HeadMeta from "../components/HeadMeta";

interface IDocs {

}

const Docs: FC<IDocs> = () => {
    usePrism();
    const full = "<link rel=\"stylesheet\" href=\"https://unpkg.com/skil3e-css@latest/dist/skil3e.min.css\" crossOrigin=\"anonymous\">"
    const basic = "<link rel=\"stylesheet\" href=\"https://unpkg.com/skil3e-css@latest/dist/skil3e-basic.min.css\" crossOrigin=\"anonymous\">"
    return (
        <div>
            <HeadMeta title={ "Documentation" } pathname={ "docs" }/>
            <GroupHeading title={ "🤸🏽‍♀️ Quick start" }/>
            <CodeHighlight lang={ "bash" }>
                npm install skil3e-css sass
            </CodeHighlight>
            <p className={ "mt--md" }>On your main scss/sass file using only utilities:</p>
            <CodeHighlight lang={ "scss" }>@use "~skil3e-css/src/basic";</CodeHighlight>
            <p className={ "mt--md" }>On your main scss/sass file using library with components:</p>
            <CodeHighlight lang={ "scss" }>@use "~skil3e-css/src/skil3e";</CodeHighlight>
            <h3 className={ "h4 mt--xl mb--md" }>CDN</h3>
            <p>Only utilities</p>
            <CodeHighlight lang={ "html" }>
                { basic }
            </CodeHighlight>
            <p className={ "mt--md" }>Library with components</p>
            <CodeHighlight lang={ "html" }>
                { full }
            </CodeHighlight>
        </div>
    )
}

export default Docs
