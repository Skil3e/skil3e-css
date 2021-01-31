import * as React from "react";
import { createContext, Dispatch, FC, memo, SetStateAction, useContext } from "react";
import { useThemeChanger } from "../utils";

interface IThemeContext {
    theme: string
    setTheme: Dispatch<SetStateAction<string>>
    toggleTheme?: () => void
}

export const ThemeContext = createContext<IThemeContext>( {
    theme   : "",
    setTheme: () => {
    }
} );

export const ThemeProvider: FC = memo( ( { children } ) => {
    const [ theme, setTheme, toggleTheme ] = useThemeChanger()
    return (
        <ThemeContext.Provider value={ {
            theme   : theme,
            setTheme: setTheme,
            toggleTheme
        } }>
            { children }
        </ThemeContext.Provider>
    )
} )

export function useTheme() {
    return useContext( ThemeContext );
}
