import * as React from "react";
import { FC } from "react";
import { usePrism } from "../../utils";
import GroupHeading from "../../components/GroupHeading";
import CodeHighlight from "../../components/CodeHighlight";

interface IColors {

}

const Colors: FC<IColors> = () => {
    const defaultColors = [ 'accent', "gray", 'blue', "mint", "emerald", "yellow", "orange", "red", "pink", "purple" ];
    const shades = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
    usePrism();
    return (
        <div className={ "utils" }>
            <GroupHeading title={ "Colors" }>
                The framework comes with some default that you can extend or remove.
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
            <GroupHeading title={ "Customize" }/>
            <CodeHighlight children={ variables }/>
            <GroupHeading title={ "Default color shades" }/>
            <div className={ "md:flex md:flex--wrap" }>
                { defaultColors.map( ( clr, i ) =>
                    <div key={ clr } className={ "mb--md md:col--6 " + (i % 2 === 0 ? "pr--md" : "pl--md") }>
                        <div className={ `bg--${ clr } p--lg ${ clr === "yellow" || clr === "mint" || clr === "emerald" ? `text--${ clr }-8` : `text--${ clr }-1` }` }>{ clr }</div>
                        <div className={ "color-grid" }>
                            { shades.map( shade => <div key={ shade } className={ `bg--${ clr }-${ shade } ${ shade < 5 && `text--${ clr }-8` } p--lg` }>{ clr }-{ shade }</div> ) }
                        </div>
                    </div>
                ) }
            </div>
        </div>
    )
}

export default Colors

const variables = `@use "~skil3e-css/src/color_shades" with (
$divider         : st.$divider,
$important       : st.$important,
$steps           : 4,
$ratio           : 1.25,
$satRatio        : .5,
$selector        : ":root",
$hover           : true,

$styleProperties : (
\t'text' : color,
\t'bg' : background-color,
\t'fill' : fill,
\t'border' : border-color
),

$colors          : (
\t'accent' : #0B5FFF,
\t'blue' : #09569c,
\t"mint": #10a791,
\t"emerald": #0baa3c,
\t"yellow": #dbca0f,
\t"orange": #cd5611,
\t"red": #e51818,
\t"pink": #c41295,
\t"purple": #7c0cbb,
),

$grays           : ('gray' : #51515a),

$addColors       : (),
$addGrays        : (),
$removeColors    : (),
$addProperties   : ()
);`
