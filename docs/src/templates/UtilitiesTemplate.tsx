import * as React from "react";
import { FC } from "react";
import GroupHeading from "../components/GroupHeading";
import { PageProps } from "gatsby";
import CodeHighlight from "../components/CodeHighlight";
import { createLabel, usePrism } from "../utils";
import { Utility } from "../types";
import ClassesTable from "../components/ClassesTable";

export interface IUtilitiesTemplate extends PageProps {
    pageContext: {
        data: Utility
    }
}

const UtilitiesTemplate: FC<IUtilitiesTemplate> = ( { pageContext: { data } } ) => {
    usePrism();
    return (
        <div>
            <GroupHeading title={ createLabel( data.utility ) }>
            </GroupHeading>
            <ClassesTable map={ data }/>
            <CodeHighlight>
                { data.variables }
            </CodeHighlight>
            <pre>
            { JSON.stringify( data, null, 2 ) }
            </pre>
        </div>
    )
}

export default UtilitiesTemplate
