import * as React from "react";
import { FC } from "react";
import { usePrism } from "../../utils";
import GroupHeading from "../../components/GroupHeading";
import CodeHighlight from "../../components/CodeHighlight";
import HeadMeta from "../../components/HeadMeta";

interface IThemes {

}

const Themes: FC<IThemes> = () => {
    usePrism();
    return (
        <div className={ "utils" }>
            <HeadMeta title={ "Themes" } pathname={ "docs/themes" }/>
            <GroupHeading title={ "Dark & Light mode" }>
                Using <code className={ "language-html" }>data-theme="dark"</code> in any element you get access to the global theme variables.
            </GroupHeading>
            <h3 className={ "mt--xxl mb--lg" }>Default properties</h3>
            <table width={ "100%" } className={ "table-classes text--code bg--bg" }>
                <tbody>
                <tr className={ "border-t border--border" }>
                    <td className={ "w--50 p--md " }>bg--color</td>
                    <td className={ "w--50 p--md language-css" }><code>background-color : var(--color);</code></td>
                </tr>
                <tr className={ "border-t border--border" }>
                    <td className={ "w--50 p--md " }>text--color</td>
                    <td className={ "w--50 p--md language-css" }><code>color : var(--color);</code></td>
                </tr>
                <tr className={ "border-t border--border" }>
                    <td className={ "w--50 p--md " }>border--color</td>
                    <td className={ "w--50 p--md language-css" }><code>border-color : var(--color);</code></td>
                </tr>
                <tr className={ "border-t border--border" }>
                    <td className={ "w--50 p--md " }>fill--color</td>
                    <td className={ "w--50 p--md language-css" }><code>fill : var(--color);</code></td>
                </tr>
                </tbody>
            </table>
            <h3 className={ "mt--xxl mb--lg" }>Default CSS custom properties</h3>
            <CodeHighlight children={ defaults }/>
            <GroupHeading title={ "Customize" }/>
            <CodeHighlight children={ variables }/>
        </div>
    )
}

export default Themes

const defaults = `:root {
    --body: #d5d7dd;
    --bg: white;
    --bgDimmed: #f1f2f4;
    --border: #c7cad1;
    --text: #17191c;
    --textDimmed: #5c6370;
    --pale: rgba(11, 95, 255, 0.1);
}
[data-theme=dark] {
    --body: #0b0c0e;
    --bg: #17191c;
    --bgDimmed: #22252a;
    --border: #2e3138;
    --text: #c7cad1;
    --textDimmed: #8f96a3;
}
`

const variables = `@use "~skil3e-css/src/color_shades" with (
$divider         : st.$divider,
$important       : st.$important,
$useCallback     : false,
$makeHover       : false,

$addProperties   : (),
$addToDark       : (),
$addToLight      : (),

$styleProperties : (
\t'text' : color,
\t'bg' : background-color,
\t'fill' : fill,
\t'border' : border-color
),

$themeLight      : (
\t'body' : hsl(220, 11%, 85%),
\t'bg' : #fff,
\t'bgDimmed' : hsl(220, 11%, 95%),
\t'border' : hsl(220, 11%, 80%),
\t'text' : hsl(220, 11%, 10%),
\t'textDimmed' : hsl(220, 11%, 40%)
),

$themeDark       : (
\t'body' : hsl(220, 11%, 5%),
\t'bg' : hsl(220, 11%, 10%),
\t'bgDimmed' : hsl(220, 11%, 15%),
\t'border' : hsl(220, 11%, 20%),
\t'text' : hsl(220, 11%, 80%),
\t'textDimmed' : hsl(220, 11%, 60%)
)
);`
