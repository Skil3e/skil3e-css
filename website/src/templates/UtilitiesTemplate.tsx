import * as React from "react";
import { FC } from "react";
import GroupHeading from "../components/GroupHeading";
import { PageProps } from "gatsby";
import CodeHighlight from "../components/CodeHighlight";
import { createLabel, usePrism } from "../utils";
import { Utility } from "../types";
import ClassesTable from "../components/ClassesTable";
import HeadMeta from "../components/HeadMeta";

export interface IUtilitiesTemplate extends PageProps {
    pageContext: {
        data: Utility
    }
}

const UtilitiesTemplate: FC<IUtilitiesTemplate> = ( { pageContext: { data } } ) => {
    usePrism();
    return (
        <div className={ "utils" }>
            <HeadMeta title={ createLabel( data.utility ) } pathname={ "docs/" + data.utility }/>
            <GroupHeading title={ createLabel( data.utility ) }>
            </GroupHeading>
            <ClassesTable map={ data }/>
            <GroupHeading title={ "Customize" }/>
            <CodeHighlight>@use "~skil3e-css/src/utilities/{ data.utility } with (
                { data.variables });
            </CodeHighlight>
            {/*<CodeHighlight lang={"json"}>*/ }
            {/*    { JSON.stringify( data, null, 2 ) }*/ }
            {/*</CodeHighlight>*/ }
        </div>
    )
}

export default UtilitiesTemplate
