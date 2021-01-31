import * as React from "react";
import { FC } from "react";
import { useTheme } from "../ThemeProvide";
import { joinIgnoreEmpty } from "../../utils";

interface IThemeChanger {
    className?: string
}

const ThemeChanger: FC<IThemeChanger> = ( { className } ) => {
    const { theme, toggleTheme } = useTheme();
    const cls = joinIgnoreEmpty( "switch", className )
    return (
        <div className={ cls }>
            <input id="switch" type="checkbox" onChange={ () => toggleTheme() } checked={ theme === "dark" } className="switch__input"/>
            <label htmlFor="switch" className="switch__label">
                <span className="switch__button"/>
                <span className="sr-only">Switch</span>
            </label>
        </div>
    )
}

export default ThemeChanger
