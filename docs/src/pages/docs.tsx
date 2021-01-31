import * as React from "react";
import { FC } from "react";

import GroupHeading from "../components/GroupHeading";

interface IDocs {

}

const Docs: FC<IDocs> = () => {
    return (
        <>
            <GroupHeading title={ "Getting started" }>
                Skil3e-css a simple modular css utility framework. It utilizes the new SASS at-rules that allows you to use only the part you need, the way you need them.
            </GroupHeading>
        </>
    )
}

export default Docs
