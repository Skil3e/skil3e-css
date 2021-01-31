import * as React from "react";
import { FC } from "react";
import { useLayout } from "../LayoutProvider";

interface IDrawerToggle {

}

const DrawerToggle: FC<IDrawerToggle> = () => {
    const { dispatch } = useLayout();
    return (
        <button className={ "flex lg:none fixed right--0 top--drawerToggle bg--bgDimmed p--md border--0 z--6" } onClick={ () => dispatch( { type: "TOGGLE_DRAWER" } ) }>
            <svg fill={"var(--accent)"} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path d="M2 13.5h14V12H2v1.5zm0-4h14V8H2v1.5zM2 4v1.5h14V4H2z"/>
            </svg>
        </button>
    )
}

export default DrawerToggle
