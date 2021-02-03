import * as React from "react";
import { FC } from "react";
import GroupHeading from "../../components/GroupHeading";
import CodeHighlight from "../../components/CodeHighlight";
import { usePrism } from "../../utils";

interface IGlobals {

}

const Globals: FC<IGlobals> = () => {
    usePrism();
    return (
        <div className={ "utils" }>
            <GroupHeading title={ "Editing global variables" }>
                You can customize default settings to match your needs. Use the code bellow before any other file. Default values are displayed.
            </GroupHeading>
            <CodeHighlight children={ variables }/>
            <GroupHeading title={ "Example adding values to spacers" }/>
            <CodeHighlight children={ example }/>
        </div>
    )
}

export default Globals

const example = `@use "~skil3e-css/src/settings" with (
$addSpacer : ("customSpacer": 5rem)
)
/* Other imports you want to modify */
@use "~skil3e-css/src/skil3e";`
const variables = `@use "~skil3e-css/src/settings" with (
$divider             : "--", /* Divider between class property name and the value eg. m--md */
$important           : false, /* use !important for all utilities (not recommended for specificity reasons). */
$posDivider          : "-", /* Divider between class property name and positions if exists eg. border-t (actual CSS value border-top) */
$includeReduceMotion : true, /* Include option to disable animations if the user has that preference */
$transition-timing   : 250ms ease, /* Transition timing for all transitions */
$containerWidth      : 1140px, /* max-width for the .container class */
//--------------------------------------------------------------//
//  Breakpoints
//--------------------------------------------------------------//
$phone               : 480px,
$tablet              : 768px,
$laptop              : 992px,
$desktop             : 1200px,
$breakpoints         : (
    sm\\: : $phone,
    md\\: : $tablet,
    lg\\: : $laptop,
    xl\\: : $desktop
), 
/* 
Map to create responsive classes 
escaping the : symbol allows us to have this syntax
<div class="md:flex">...</div> 
*/
//--------------------------------------------------------------//
//  Spacers (values to create margin and padding)
//--------------------------------------------------------------//
$spacersDefault      : (
    '0' : '0', 
    '10' : '0.625rem', 
    '15' : '0.9375rem', 
    'xs' : '0.25rem', 
    'sm' : '0.5rem', 
    'md' : '1rem', 
    'lg' : '1.5rem', 
    'xl' : '2rem', 
    'xxl': '2.5rem'
),
$addSpacer           : (), /* This map is merged with $spacersDefault */
//--------------------------------------------------------------//
// Typography
//--------------------------------------------------------------//
$systemFonts         : -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
$bodyFont            : $systemFonts,
$headingFont         : $systemFonts,
$headingLineHeight   : 1,
$headingFontWeight   : 500,
$pLineHeight         : 1.6875rem
);
/* Other imports you want to modify */
@use "~skil3e-css/src/skil3e";`
