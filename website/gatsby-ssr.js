import React from "react";

export const onPreRenderHTML = async ({getHeadComponents, replaceHeadComponents,}) => {
    const headComponents = getHeadComponents();
    headComponents.sort((a, b) => {
        if (a.type === b.type || (a.type !== 'style' && b.type !== 'style')) {
            return 0;
        }

        if (a.type === 'style') {
            return 1;
        } else if (b.type === 'style') {
            return -1;
        }

        return 0;
    });

    replaceHeadComponents(headComponents);
}

export const onRenderBody = async ({setPreBodyComponents}) => {
    const codeToRunOnClient = `(function() {
  let currentTheme = localStorage.getItem( "currentTheme" );
  if (!currentTheme) {
      if (window.matchMedia && window.matchMedia( '(prefers-color-scheme: dark)' ).matches) {
          currentTheme = "dark";          
      } else {
          currentTheme = "light";
      }
  }
  document.body.dataset.theme= currentTheme;
})()`;
    setPreBodyComponents(<script dangerouslySetInnerHTML={{__html: codeToRunOnClient}}/>);
};
