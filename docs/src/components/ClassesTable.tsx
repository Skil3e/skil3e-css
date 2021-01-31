import * as React from "react";
import { FC } from "react";
import { Utility } from "../types";

interface IClassesTable {
    map: Utility
}

const ClassesTable: FC<IClassesTable> = ( { map } ) => {
    return (
        <table width={ "100%" } className={ "table-classes text--code mb--lg bg--bgDimmed round" }>
            <tbody>
            { map.values.map( ( { key, val }, i ) =>
                <tr key={ key } className={ i > 0 ? "border-t border--border" : "" }>
                    <td className={ "w--50 p--md text--accent" }>{ map.prefix[0] + (key ? map.divider + key : "") }</td>
                    <td className={ "w--50 p--md text--textDimmed" }>{ map.utility }: { val }</td>
                </tr>
            ) }
            </tbody>
        </table>
    )
}

export default ClassesTable
