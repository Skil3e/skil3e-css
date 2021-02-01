import * as React from "react";
import { FC } from "react";

interface IGroupHeading {
    title: string
}

const GroupHeading: FC<IGroupHeading> = ( { title, children } ) => {
    return (
        <div id={ title.replace( " ", "-" ).toLowerCase() }>
            <h2 className={ "mt--xxl mb--lg" }>{ title }</h2>
            { children && <p className="mb--md">{ children }</p> }
        </div>
    )
}

export default GroupHeading
