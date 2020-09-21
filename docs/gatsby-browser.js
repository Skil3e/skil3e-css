import React from 'react';
import {preToCodeBlock} from 'mdx-utils';
import {MDXProvider} from '@mdx-js/react';
import {StateProvider} from "./src/State";
import Code from './src/components/code/CodeHightlight';
import Layout from "./src/components/layout/Layout";

const components = {
    pre: (preProps) => {
        const props = preToCodeBlock(preProps);

        if (props) {
            return <Code {...props} language={props.className && props.className.replace(/language-/, '')}/>;
        }

        return <pre {...preProps} />;
    },
    inlineCode: (props) => <code className="inline-code" {...props} />,
    table: ({children, ...rest}) => (
        <div style={{overflowX: `auto`}}>
            <table {...rest}>{children}</table>
        </div>
    ),
};

export function wrapPageElement({element}) {
    return (
        <Layout>
            <MDXProvider components={components}>{element}</MDXProvider>
        </Layout>
    );
}

export function wrapRootElement({element}) {
    return (
        <StateProvider>
            {element}
        </StateProvider>
    )
}
