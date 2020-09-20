import * as React from "react";
import { FunctionComponent, useCallback, useContext } from "react";
import { State } from "../../../State";
import { Switch } from "skil3e-react";
import { Helmet } from "react-helmet";

interface ThemeChangerProps {
    className?: string
}

const ThemeChanger: FunctionComponent<ThemeChangerProps> = ({className}) => {
    const { theme, setTheme } = useContext( State );

    const changeTheme = useCallback( () => {
        if (theme === "dark") {
            setTheme( "light" )
            localStorage.setItem( "currentTheme", "light" );

        } else {
            setTheme( "dark" )
            localStorage.setItem( "currentTheme", "dark" );
        }
        document.body.classList.add( "transition" );
        setTimeout( () => document.body.classList.remove( "transition" ), 700 )
    }, [ theme ] );
    return (
        <>
            <Helmet bodyAttributes={ { "data-theme": theme } }/>
            <Switch className={className} id={ "theme-changer" } switchSize={ "sm" } onChange={ changeTheme } checked={ theme === "dark" } title={ "Theme Select" }/>
        </>
    )
}

export default ThemeChanger
