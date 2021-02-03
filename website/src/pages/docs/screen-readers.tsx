import * as React from "react";
import { FC } from "react";
import { usePrism } from "../../utils";
import GroupHeading from "../../components/GroupHeading";
import HeadMeta from "../../components/HeadMeta";

interface IScreenReaders {

}

const ScreenReaders: FC<IScreenReaders> = () => {
    usePrism();
    return (
        <div className={ "utils" }>
            <HeadMeta title={ "Screen readers" } pathname={ "docs/screen-readers" }/>
            <GroupHeading title={ "Screen reader helpers" }/>
            <table width={ "100%" } className={ "table-classes text--code bg--bg" }>
                <tbody>
                <tr className={ "border-t border--border" }>
                    <td className={ "w--50 p--md " }>sr-only</td>
                    <td className={ "w--50 p--md language-css" }><code>position : absolute;</code><br/>
                        <code>width : 1px;</code><br/>
                        <code>height : 1px;</code><br/>
                        <code>padding : 0;</code><br/>
                        <code>margin : -1px;</code><br/>
                        <code>overflow : hidden;</code><br/>
                        <code>clip : rect(0, 0, 0, 0);</code><br/>
                        <code>border : 0;</code></td>
                </tr>
                <tr className={ "border-t border--border" }>
                    <td className={ "w--50 p--md " }>not-sr-only</td>
                    <td className={ "w--50 p--md language-css" }><code>position : static;</code><br/>
                        <code>width : auto;</code><br/>
                        <code>height : auto;</code><br/>
                        <code>padding : 0;</code><br/>
                        <code>margin : 0;</code><br/>
                        <code>overflow : visible;</code><br/>
                        <code>clip : auto;</code><br/>
                        <code>border : 0;</code></td>
                </tr>
                <tr className={ "border-t border--border" }>
                    <td className={ "w--50 p--md " }>sr-only-focusable</td>
                    <td className={ "w--50 p--md language-css" }><code>position : absolute;</code><br/>
                        <code>width : 1px;</code><br/>
                        <code>height : 1px;</code><br/>
                        <code>padding : 0;</code><br/>
                        <code>margin : -1px;</code><br/>
                        <code>overflow : hidden;</code><br/>
                        <code>clip : rect(0, 0, 0, 0);</code><br/>
                        <code>border : 0;</code><br/>
                        <code>:focus</code><br/>
                        <code>position : relative;</code><br/>
                        <code>width : auto;</code><br/>
                        <code>height : auto;</code>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ScreenReaders
