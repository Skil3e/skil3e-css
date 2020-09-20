import * as React from 'react';
import { useSidebar } from '@rocketseat/gatsby-theme-docs-core';
import NavLink from "./NavLink";

const Sidebar: React.FC<{ className?: string }> = ( { className } ) => {
    const data = useSidebar();
    return (
        <aside className={ className }>
            <nav className={ "h--sidebar p--md" }>
                <ul>
                    { data.map( item => {
                            return (
                                <li key={ item.node.id }>
                                    { item.node.items
                                        ?
                                        <div>
                                            <h4 className={"text--accent p--sm mt--md"}>{ item.node.label.toUpperCase() }</h4>
                                            <ul>
                                                { item.node.items.map( item =>
                                                    <li key={item.link}>
                                                        <NavLink className={"round"} inSidebar to={ item.link }>{ item.label }</NavLink>
                                                    </li>
                                                ) }
                                            </ul>
                                        </div>
                                        : <NavLink className={"round"} inSidebar to={ item.node.link }>{ item.node.label }</NavLink>
                                    }
                                </li>
                            )
                        }
                    ) }
                </ul>
            </nav>

        </aside>
    )
    /*
      [
        {
          "node": {
            "label": "Home",
            "link": "/",
            "items": null,
            "id": "a2913be3-af3c-5fc9-967e-a058e86b20a9"
          }
        },
        {
          "node": {
            "label": "With dropdown",
            "link": null,
            "items": [{ "label": "My Example", "link": "/my-example" }],
            "id": "c7d9606c-4bda-5097-a0df-53108e9f4efd"
          }
        }
      ]
    */
}
export default Sidebar
