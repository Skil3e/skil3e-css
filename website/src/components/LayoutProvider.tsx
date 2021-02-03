import * as React from "react";
import { createContext, Dispatch, FunctionComponent, memo, useContext, useEffect, useReducer } from 'react';

interface ILayoutContext extends IReducer {
    dispatch: Dispatch<ActionType>
}

interface IReducer {
    drawerOpen: boolean
    isMobile: boolean
}

type ActionType = {
    type: 'TOGGLE_DRAWER' | 'CLOSE_DRAWER' | 'OPEN_DRAWER' | 'SET_MOBILE'
    args?: any
}

function layoutContextReducer( state: IReducer, action: ActionType ) {
    switch (action.type) {
        case 'TOGGLE_DRAWER':
            return {
                ...state,
                drawerOpen: !state.drawerOpen
            };
        case 'OPEN_DRAWER':
            return {
                ...state,
                drawerOpen: true
            };
        case 'CLOSE_DRAWER':
            return {
                ...state,
                drawerOpen: false
            };
        case 'SET_MOBILE':
            return {
                ...state,
                isMobile: action.args
            };
        default:
            throw new Error();
    }
}

const initialState = {
    drawerOpen: true,
    isMobile  : false,
    dispatch  : () => {
    }
}


export const LayoutContext = createContext<ILayoutContext>( initialState );

export const LayoutProvider: FunctionComponent = memo( ( { children } ) => {
    const [ state, dispatch ] = useReducer( layoutContextReducer, initialState );

    function checker() {
        if (window.innerWidth >= 992) {
            dispatch( { type: "SET_MOBILE", args: false } )
            dispatch( { type: "OPEN_DRAWER" } )
        } else {
            dispatch( { type: "SET_MOBILE", args: true } )
            dispatch( { type: "CLOSE_DRAWER" } )
        }
    }

    useEffect( () => {
        checker();
        window.addEventListener( "resize", checker );
        return () => window.removeEventListener( "resize", checker );
    }, [] )

    return (
        <LayoutContext.Provider value={ {
            drawerOpen: state.drawerOpen,
            isMobile  : state.isMobile,
            dispatch,
        } }>
            { children }
        </LayoutContext.Provider>
    )
} )

export function useLayout() {
    return useContext( LayoutContext );
}
