import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Highlight, {defaultProps} from 'prism-react-renderer';
import rangeParser from 'parse-numeric-range';
import theme from 'prism-react-renderer/themes/dracula';
import {LiveProvider, LiveEditor, LivePreview, LiveError} from 'react-live';

import {copyToClipboard} from '../util';

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

export default function CodeHighlight({codeString, className, live, highlight, title, lineNumbers}) {
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
            <LiveProvider code={codeString} noInline theme={theme} transformCode={(code) => `/** @jsx mdx */${code}`}>
                <div>
                    <LivePreview/>

                    <div>
                        <button onClick={handleClick} disabled={copied}>
                            {copied ? 'Copied!' : 'Copy'}
                        </button>

                        <LiveEditor/>
                    </div>

                    <LiveError/>
                </div>
            </LiveProvider>
        );
    }

    return (
        <>
            {title && <div>{title}</div>}
            <div className="gatsby-highlight">
                <Highlight{...defaultProps} code={codeString} language={language} theme={theme}>
                    {({className: blockClassName, style, tokens, getLineProps, getTokenProps,}) => (
                        <pre className={blockClassName} style={style}>
                            <button onClick={handleClick} disabled={copied}>
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
