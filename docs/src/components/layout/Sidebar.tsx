import * as React from "react";
import { FC } from "react";
import { Link } from "gatsby"
import { joinIgnoreEmpty } from "../../utils";
import { useLayout } from "../LayoutProvider";

interface ISidebar {
    className?: string
}

const Sidebar: FC<ISidebar> = ( { className } ) => {
    const { drawerOpen, isMobile, dispatch } = useLayout();
    const cls = joinIgnoreEmpty( "w--sidebar fixed top--header bg--body z--7", className, isMobile && "right--0" );
    return (
        <>
            { isMobile && drawerOpen && <div onClick={ () => dispatch( { type: "CLOSE_DRAWER" } ) } className={ "fixed inset--0 bg--overlay z--6" }/> }
            { drawerOpen &&
            <aside className={ cls }>
                <nav className={ "px--lg py--md h--main side-nav overflow-y--auto" } key={ "css-utilities" }>
                    <ul>
                        <li className={ "text--bold text--uppercase p--10" }>Settings</li>
                        <SidebarLink to={ "/docs/spacers" }>Spacers</SidebarLink>

                        <SideHeader>Layout</SideHeader>
                        <SidebarLink to={ "/docs/overflow" }>Overflow</SidebarLink>
                        <SidebarLink to={ "/docs/position" }>Position</SidebarLink>
                        <SidebarLink to={ "/docs/position-placement" }>Position Placement</SidebarLink>
                        <SidebarLink to={ "/docs/z-index" }>Z Index</SidebarLink>
                        <SidebarLink to={ "/docs/object-fit" }>Object Fit</SidebarLink>
                        <SidebarLink to={ "/docs/object-position" }>Object Position</SidebarLink>

                        <SideHeader>Colors</SideHeader>
                        <SidebarLink to={ "/docs/themes" }>Themes</SidebarLink>
                        <SidebarLink to={ "/docs/intents" }>Intents</SidebarLink>

                        <SideHeader>Flexbox</SideHeader>
                        <SidebarLink to={ "/docs/flex-direction" }>Flex Direction</SidebarLink>
                        <SidebarLink to={ "/docs/flex-fill" }>Flex Fill</SidebarLink>
                        <SidebarLink to={ "/docs/flex-grow" }>Flex Grow</SidebarLink>
                        <SidebarLink to={ "/docs/flex-shrink" }>Flex Shrink</SidebarLink>
                        <SidebarLink to={ "/docs/flex-wrap" }>Flex Wrap</SidebarLink>

                        <SideHeader>Alignment</SideHeader>
                        <SidebarLink to={ "/docs/align" }>Align</SidebarLink>
                        <SidebarLink to={ "/docs/justify" }>Justify</SidebarLink>

                        <SideHeader>Spacing</SideHeader>
                        <SidebarLink to={ "/docs/margin" }>Margin</SidebarLink>
                        <SidebarLink to={ "/docs/padding" }>Padding</SidebarLink>

                        <SideHeader>Sizing</SideHeader>
                        <SidebarLink to={ "/docs/width" }>Width</SidebarLink>
                        <SidebarLink to={ "/docs/height" }>Height</SidebarLink>

                        <SideHeader>Borders</SideHeader>
                        <SidebarLink to={ "/docs/border-width" }>Border Width</SidebarLink>
                        <SidebarLink to={ "/docs/border-radius" }>Border Radius</SidebarLink>
                        <SidebarLink to={ "/docs/border-color" }>Border Color</SidebarLink>

                        <SideHeader>Typography</SideHeader>
                        <SidebarLink to={ "/docs/font-size" }>Font Size</SidebarLink>
                        <SidebarLink to={ "/docs/font-weight" }>Font Weight</SidebarLink>
                        <SidebarLink to={ "/docs/text-align" }>Text Align</SidebarLink>
                        <SidebarLink to={ "/docs/text-transform" }>Text Transform</SidebarLink>

                        <SideHeader>Misc</SideHeader>
                        <SidebarLink to={ "/docs/cursor" }>Cursor</SidebarLink>
                        <SidebarLink to={ "/docs/pointer-events" }>Pointer Events</SidebarLink>
                        <SidebarLink to={ "/docs/transitions" }>Transitions</SidebarLink>

                        <SideHeader>Accessibility</SideHeader>
                        <SidebarLink to={ "/docs/screen-readers" }>Screen Readers</SidebarLink>
                        <SidebarLink to={ "/docs/reduce-motion" }>Reduce Motion</SidebarLink>

                    </ul>
                </nav>
            </aside>
            }
        </>
    )
}

export default Sidebar


export const SideHeader: FC = ( { children } ) => (
    <li className={ "text--bold text--uppercase p--10 mt--md" }>{ children }</li>
)

interface ISidebarLink {
    to: string
}

export const SidebarLink: FC<ISidebarLink> = ( { to, children } ) => {
    const { isMobile, dispatch } = useLayout();
    return (
        <li>
            <Link to={ to } onClick={ () => {
                if (isMobile) {
                    dispatch( { type: "CLOSE_DRAWER" } )
                }
            } } className={ "block text--textDimmed p--sm hover:text--accent" } activeClassName={ "text--accent bg--pale round" }>{ children }</Link>
        </li>
    )
}
