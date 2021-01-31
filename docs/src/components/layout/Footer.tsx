import * as React from "react";
import { FC } from "react";

interface IFooter {
    className?: string
    siteName: string
}

const Footer: FC<IFooter> = ( { className, siteName } ) => {
    return (
        <footer className={ className }>
            &#169; { siteName } { new Date().getFullYear() }
        </footer>
    )
}

export default Footer
