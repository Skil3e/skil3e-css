import * as React from "react";
import { FC } from "react";

interface ICodeHighlight {
    lang?: string
}

const CodeHighlight: FC<ICodeHighlight> = ( { lang, children } ) => {
    return (
        <pre className={ `language-${ lang ?? "scss" }` }>
            <code>{ children }</code>
        </pre>
    )
}

export default CodeHighlight
