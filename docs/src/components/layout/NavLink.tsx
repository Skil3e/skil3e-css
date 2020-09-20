import * as React from "react";
import { FunctionComponent } from "react";
import { Link } from "@reach/router";
import { joinIgnoreEmpty } from "skil3e-react";

interface NavLinkProps {
    to: string,
    show?: boolean
    partiallyCurrent?: boolean
    onClick?: () => void
    className?: string
    inSidebar?: boolean
}

const NavLink: FunctionComponent<NavLinkProps> = ( { to, inSidebar, className, children, show = true, partiallyCurrent, onClick } ) => {
    const navCls = joinIgnoreEmpty( "al__it--center ", inSidebar ? "flex p--10 my--sm" : "inline-flex p--md h--header font--h hover:text--accent", className )
    if (!show) {
        return <></>;
    }
    return (
        <Link to={ to }
              onClick={ onClick }
              className={ navCls }
              getProps={ ( { isCurrent, isPartiallyCurrent } ) => {
                  const hCls = partiallyCurrent
                      ? isPartiallyCurrent ? "text--accent" : "text--textDimmed" :
                      isCurrent ? "text--accent" : "text--textDimmed";
                  const sideCls = isCurrent ? "bg--bg text--accent" : "";
                  return {
                      className: joinIgnoreEmpty( navCls, inSidebar ? sideCls : hCls )
                  }
              } }
        >
            { children }
        </Link>
    )
}

export default NavLink
