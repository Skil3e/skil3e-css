import * as React from 'react';
import { useContext, useState } from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import rangeParser from 'parse-numeric-range';
import themeDark from 'prism-react-renderer/themes/dracula';
import themeLight from 'prism-react-renderer/themes/github';
import { LiveProvider, LiveEditor, LivePreview, LiveError,  } from 'react-live';
import { copyToClipboard } from '../util';
import { State } from "../../State";
import LiveCodeScope from "./LiveCodeScope";

const calculateLinesToHighlight = ( meta ) => {
    const RE = /{([\d,-]+)}/;

    if (RE.test( meta )) {
        const strlineNumbers = RE.exec( meta )[1];
        const lineNumbers = rangeParser( strlineNumbers );
        return ( index ) => lineNumbers.includes( index + 1 );
    } else {
        return () => false;
    }
};

interface ICodeHighlight {
    codeString: string
    className: string
    live?: string | boolean
    title?: string,
    lineNumbers?: string
    highlight?: number[]
    language: Language
    noInline?: boolean
}

const CodeHighlight: React.FC<ICodeHighlight> = ( {noInline, codeString, className, live, highlight, title, lineNumbers, language } ) => {
    const { theme } = useContext( State )
    const [ copied, setCopied ] = useState( false );
    const shouldHighlightLine = calculateLinesToHighlight( highlight );
    const handleClick = async () => {
        await copyToClipboard( codeString );
        setCopied( true );

        setTimeout( () => {
            setCopied( false );
        }, 4000 );

    };

    if (live) {
        return (
            <div className={ `code-highlight live-view` }>
                <LiveProvider code={ codeString } noInline={noInline} theme={ theme === "light" ? themeLight : themeDark } language={ language } scope={ LiveCodeScope } transformCode={ code => '/** @jsx mdx */' + code }>
                    <LivePreview className={`p--md bg--bgDimmed`}/>
                    <div className={ `relative language-${language} lang-label` }>
                        <button onClick={ handleClick } disabled={ copied } className={ "button fill copy round-b absolute px--sm py--xs text--small right--0 top--0 z--5" }>
                            { copied ? 'Copied!' : 'Copy' }
                        </button>
                        <LiveEditor/>
                    </div>
                    <LiveError/>
                </LiveProvider>
            </div>
        );
    }

    return (
        <>
            { title && <div>{ title }</div> }
            <div className="code-highlight relative">
                <Highlight{ ...defaultProps } code={ codeString } language={ language } theme={ theme === "light" ? themeLight : themeDark }>
                    { ( { className, style, tokens, getLineProps, getTokenProps, } ) => (
                        <pre className={ className + " lang-label px--md pt--xxl pb--lg round" } style={ style }>
                            <button onClick={ handleClick } disabled={ copied } className={ "button fill copy round-b absolute px--sm py--xs text--small right--0 top--0" }>
                                { copied ? 'Copied!' : 'Copy' }
                            </button>
                            <code>
                                { tokens.map( ( line, index ) => {
                                    const lineProps = getLineProps( { line, key: index } );

                                    if (shouldHighlightLine( index )) {
                                        lineProps.className = `${ lineProps.className } highlight-line`;
                                    }

                                    return (
                                        <div { ...lineProps } className={ lineProps.className + " " }>
                                            { lineNumbers && <span>{ index + 1 }</span> }
                                            { line.map( ( token, key ) => (
                                                <span { ...getTokenProps( { token, key } ) } />
                                            ) ) }
                                        </div>
                                    );
                                } ) }
                            </code>
                        </pre>
                    ) }
                </Highlight>
            </div>
        </>
    );
}

export default CodeHighlight


CodeHighlight.defaultProps = {
    live       : false,
    title      : null,
    lineNumbers: null,
};
