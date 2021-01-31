import Prism from "prismjs";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const joinIgnoreEmpty = ( ...strings: any ) => {
    return strings.filter( Boolean ).join( " " );
}

export function usePrism() {
    useEffect( () => {
        Prism.highlightAll()
    }, [] )
}

export const useThemeChanger = (): [ string, Dispatch<SetStateAction<string>>, () => void ] => {
    const [ theme, setTheme ] = useState( "" );

    function toggleTheme() {
        if (theme === "dark") {
            setTheme( "light" )
            localStorage.setItem( "currentTheme", "light" )
        } else {
            setTheme( "dark" )
            localStorage.setItem( "currentTheme", "dark" )
        }
    }

    useEffect( () => {
        let currentTheme = localStorage.getItem( "currentTheme" );
        if (!currentTheme) {
            if (window.matchMedia && window.matchMedia( '(prefers-color-scheme: dark)' ).matches) {
                currentTheme = "dark";
            } else {
                currentTheme = "light";
            }
        }
        setTheme( currentTheme )
    }, [] )

    return [ theme, setTheme, toggleTheme ]
}
export const createLabel = ( name: string, operator: string = "-" ) => {
    const addSpace = name.split( operator ).join( " " );
    return addSpace.charAt( 0 ).toUpperCase() + addSpace.substring( 1 ).toLowerCase();
}
