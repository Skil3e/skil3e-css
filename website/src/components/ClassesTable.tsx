import * as React from "react";
import { FC } from "react";
import { Utility } from "../types";

interface IClassesTable {
    map: Utility
}

const ClassesTable: FC<IClassesTable> = ( { map } ) => {
    map.utility === "positions-placement" && map.prefix.push( "inset", "inset-x", "inset-y" );
    return (
        <div className={ "overflow-y--auto mb--lg bg--bg round" } style={ { maxHeight: 600 } }>
            { map.prefix.map( pre => {
                    return (
                        <table key={ pre } width={ "100%" } className={ "table-classes text--code" }>
                            <tbody>
                            { removeFiltered( pre, map ).map( ( { key, val } ) => {
                                    if (map.withPosition) {
                                        return <RowWithPosition key={ key } map={ map } classKey={ key } pre={ pre } val={ val }/>
                                    }
                                    return (
                                        <RowSimple key={ key } map={ map } classKey={ key } pre={ pre } val={ val }/>
                                    )
                                }
                            ) }
                            </tbody>
                        </table>
                    )
                }
            ) }
        </div>
    )
}

export default ClassesTable

interface IRow {
    map: Utility
    pre: string
    classKey: string
    val: string
}

const RowSimple: FC<IRow> = ( { pre, classKey, map, val } ) => (
    <tr className={ "border-t border--border" }>
        <td className={ "w--50 p--md " }>{ createClassUtility( pre, classKey, map.divider ) }</td>
        <td className={ "w--50 p--md language-css" }> { valueWithInset( pre, val, map.utility ) }</td>
    </tr>
)

function valueWithInset( pre: string, val: string, utility: string ) {
    switch (pre) {
        case "inset":
            return <><code>top: { val };</code><br/><code>right: { val };</code><br/><code>bottom: { val };</code><br/><code>left: { val };</code></>
        case "inset-y":
            return <><code>top: { val };</code><br/><code>bottom: { val };</code></>
        case "inset-x":
            return <><code>right: { val };</code><br/><code>left: { val };</code></>
        default:
            return <code>{ utility === "positions-placement" ? pre : setUtilFromPrefix( pre, utility ) }: { val };</code>
    }
}

const RowWithPosition: FC<IRow> = ( { map, pre, classKey, val } ) => {
    return (
        <>
            { positionValuesArray( pre ).map( ( [ posKey, posValue ] ) =>
                <tr key={ posKey } className={ "border-t border--border" }>
                    <td className={ "w--50 p--md" }>{ createClassUtility( pre, classKey, map.divider, posKey ) }</td>
                    <TableUtilityPosData val={ val } pre={ pre } posKey={ posKey } posValue={ posValue } utility={ map.utility }/>
                </tr>
            ) }
        </>
    )
}

interface ITableUtilityData {
    pre: string
    val: string
    posKey: string
    posValue: string
    utility: string
}

const TableUtilityPosData: FC<ITableUtilityData> = ( { pre, posKey, posValue, val, utility } ) => {
    return (
        <td className={ "w--50 p--md language-css" }>
            { pre === "border"
                ? borderWidthContent( posKey, posValue, val )
                : pre === "round"
                    ? borderRadiusContent( posKey, posValue, val )
                    : handleXYPosition( posKey, posValue, val, pre, utility )
            }
        </td>
    )
}

function handleXYPosition( posKey: string, posValue: string, val: string, pre: string, utility: string ) {
    switch (posKey) {
        case ("x"):
        case ("y"):
            return <>
                <code>{ setUtilFromPrefix( pre, utility ) }{ posValue && `-${ posValue.split( " " )[0] }` }: { val };</code><br/>
                <code>{ setUtilFromPrefix( pre, utility ) }{ posValue && `-${ posValue.split( " " )[1] }` }: { val };</code>
            </>
        default :
            return <code>{ setUtilFromPrefix( pre, utility ) + (posValue && "-" + posValue) }: { val };</code>
    }
}

function borderWidthContent( posKey: string, posValue: string, val: string ) {
    switch (posKey) {
        case ("x"):
        case ("y"):
            return <>
                <code>border{ posValue && `-${ posValue.split( " " )[0] }` }-width: { val };</code><br/>
                <code>border{ posValue && `-${ posValue.split( " " )[1] }` }-width: { val };</code>
            </>
        default :
            return <code>border{ posValue && `-${ posValue }` }-width: { val };</code>
    }
}

function borderRadiusContent( posKey: string, posValue: string, val: string ) {
    switch (posKey) {
        case ("t"):
            return <>
                <code>border-top-right-radius: { val };</code><br/>
                <code>border-top-left-radius: { val };</code>
            </>
        case ("b"):
            return <>
                <code>border-bottom-right-radius: { val };</code><br/>
                <code>border-bottom-left-radius: { val };</code>
            </>
        case ("l"):
            return <>
                <code>border-top-left-radius: { val };</code><br/>
                <code>border-bottom-left-radius: { val };</code>
            </>
        case ("r"):
            return <>
                <code>border-top-right-radius: { val };</code><br/>
                <code>border-bottom-right-radius: { val };</code>
            </>
        case ("x"):
        case ("y"):
            return null
        default :
            return <code>border-radius: { val };</code>
    }
}


function createClassUtility( pre: string, key: string, divider: string, pos?: string ) {
    if (pre === "null") {
        return key
    } else if (pos) {
        switch (pre) {
            case ("m") :
            case ("p") :
                return pre + pos + (key && divider + key);
            default:
                return pre + "-" + pos + (key && divider + key);
        }
    } else if (!key) {
        return pre
    } else {
        return pre + divider + key;
    }
}

function setUtilFromPrefix( pre: string, defaultUtil: string ) {
    switch (pre) {
        case("al__it"):
            return "align-items"
        case("al__cnt"):
            return "align-content"
        case("al__self"):
            return "align-self"
        case("jf__it"):
            return "justify-items"
        case("jf__cnt"):
            return "justify-content"
        case("jf__self"):
            return "justify-self"
        case("overflow-x"):
            return "overflow-x"
        case("overflow-y"):
            return "overflow-y"
        default:
            return defaultUtil
    }
}

function removeFiltered( pre: string, map: Utility ) {
    if (pre === "jf__it" || pre === "jf__self") {
        return map.values.filter( ( val ) => !(val.key === "between") && !(val.key === "around") && !(val.key === "evenly") )
    } else {
        return map.values;
    }
}

function positionValuesArray( pre: string, ) {
    const posWithXY = { "": "", "t": "top", "b": "bottom", "l": "left", "r": "right", "x": "left right", "y": "top bottom" }
    const pos = { "": "", "t": "top", "b": "bottom", "l": "left", "r": "right" }
    if (pre === "round") {
        return Object.entries( pos )
    } else {
        return Object.entries( posWithXY )
    }
}
