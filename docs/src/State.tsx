import * as React from "react";
import { FunctionComponent } from "react";
import { useCheckForScreens, useThemeChanger } from "skil3e-react";

const defaultState = {
    isMobile: false,
    screen  : "desktop",
    theme   : "",
    setTheme: undefined,
}

export const State = React.createContext(defaultState);

export const StateProvider: FunctionComponent = ({children}) => {
    const [ theme, setTheme ] = useThemeChanger();
    const [isMobile, screen] = useCheckForScreens();
    return (
        <State.Provider value={{
            isMobile: isMobile,
            screen  : screen,
            theme   : theme,
            setTheme: setTheme,
        }}>
            {children}
        </State.Provider>
    )
};
