import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import Highlight, {defaultProps} from 'prism-react-renderer';
import rangeParser from 'parse-numeric-range';
import themeDark from 'prism-react-renderer/themes/dracula';
import themeLight from 'prism-react-renderer/themes/github';
import {LiveProvider, LiveEditor, LivePreview, LiveError} from 'react-live';
import {copyToClipboard} from '../util';
import {State} from "../../State";

const calculateLinesToHighlight = (meta) => {
    const RE = /{([\d,-]+)}/;

    if (RE.test(meta)) {
        const strlineNumbers = RE.exec(meta)[1];
        const lineNumbers = rangeParser(strlineNumbers);
        return (index) => lineNumbers.includes(index + 1);
    } else {
        return () => false;
    }
};

const CodeHighlight = ({codeString, className, live, highlight, title, lineNumbers}) => {
    const {theme} = useContext(State)
    const [copied, setCopied] = useState(false);
    const language = className && className.replace(/language-/, '');

    const shouldHighlightLine = calculateLinesToHighlight(highlight);

    const handleClick = async () => {
        await copyToClipboard(codeString);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 4000);

    };

    if (live) {
        return (
            <LiveProvider code={codeString} noInline theme={theme === "light" ? themeLight : themeDark} transformCode={(code) => `/** @jsx mdx */${code}`}>
                <LivePreview/>
                <div>
                    <button onClick={handleClick} disabled={copied} className={"button fill copy round absolute p--sm text--small right--0 top--0"}>
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                    <LiveEditor/>
                </div>
                <LiveError/>
            </LiveProvider>
        );
    }

    return (
        <>
            {title && <div>{title}</div>}
            <div className="gatsby-highlight">
                <Highlight{...defaultProps} code={codeString} language={language} theme={theme === "light" ? themeLight : themeDark}>
                    {({className, style, tokens, getLineProps, getTokenProps,}) => (
                        <pre className={className + " p--md relative round"} style={style}>
                            <button onClick={handleClick} disabled={copied} className={"button fill copy round absolute p--sm text--small right--0 top--0"}>
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                            <code>
                                {tokens.map((line, index) => {
                                    const lineProps = getLineProps({line, key: index});

                                    if (shouldHighlightLine(index)) {
                                        lineProps.className = `${lineProps.className} highlight-line`;
                                    }

                                    return (
                                        <div {...lineProps}>
                                            {lineNumbers && <span>{index + 1}</span>}
                                            {line.map((token, key) => (
                                                <span {...getTokenProps({token, key})} />
                                            ))}
                                        </div>
                                    );
                                })}
                            </code>
                        </pre>
                    )}
                </Highlight>
            </div>
        </>
    );
}

export default CodeHighlight

CodeHighlight.propTypes = {
    codeString: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    live: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    title: PropTypes.string,
    lineNumbers: PropTypes.string,
};

CodeHighlight.defaultProps = {
    live: false,
    title: null,
    lineNumbers: null,
};
