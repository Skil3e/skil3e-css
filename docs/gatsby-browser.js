import * as React from "react";
import {ThemeProvider} from "./src/components/ThemeProvide";
import {LayoutProvider} from "./src/components/LayoutProvider";
import Layout from "./src/components/layout";
import "./src/styles/styles.scss"

export const wrapRootElement = ({element}) => {
    return (
        <ThemeProvider>
            <LayoutProvider>
                {element}
            </LayoutProvider>
        </ThemeProvider>
    )
};
export const wrapPageElement = ({element, props}) => {
    return (
        <Layout {...props}>
            {element}
        </Layout>
    )
}
