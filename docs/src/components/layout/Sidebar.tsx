import * as React from 'react';
import { useSidebar } from '@rocketseat/gatsby-theme-docs-core';

const Sidebar: React.FC = () => {
    const data = useSidebar();
    console.log(data);
    return(
        <aside>
            I am the sidebar
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
