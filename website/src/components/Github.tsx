import * as React from "react";
import { FC } from "react";

interface IGithub {

}

const Github: FC<IGithub> = () => {
    return (
        <a className={"flex--center"} href={"https://github.com/Skil3e/skil3e-css"} target={"_blank"} rel="noopener noreferrer">
            <svg className="icon inline-flex al__it--center icon-github fill--text mx--sm" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 512 512" aria-labelledby="github"><title id="github">github</title>
                <path fill="#3d3d3d" d="M256,0c141.4,0,256,114.6,256,256S397.4,512,256,512S0,397.4,0,256S114.6,0,256,0z"/>
                <path fill="#000000" d="M512,256c0-8.8-0.4-17.4-1.3-25.9L391,110.3L134.1,341.6l75.6,75.6l-75.6,17.5l72.6,72.6c16,3.1,32.5,4.8,49.3,4.8 C397.4,512,512,397.4,512,256z"/>
                <path fill="#ffffff" d="M391,110.3c-14.3-5.1-49.7,13.1-69.1,25.9c-31.6-9.2-98.3-8.3-123.3,2.4c-46.2-33.1-70.6-28-70.6-28 s-15.8,28.3-4.2,69.7c-15.2,19.4-26.5,33-26.5,69.3c0,8.7,0.5,16.9,1.5,24.8c13.1,68.8,67.6,98.5,121.1,103.6 c-8.1,6.1-17.7,17.7-19.1,31.1c-10.1,6.5-30.5,8.7-46.3,3.7c-22.2-7-30.7-50.9-63.9-44.7c-7.2,1.3-5.8,6.1,0.5,10.1 c10.1,6.6,19.7,14.7,27,32.2c5.6,13.4,17.5,37.3,55,37.3c14.9,0,25.3-1.8,25.3-1.8s0.3,34.2,0.3,47.5c0,4.5-1.8,8-4.2,10.9 c19.7,4.9,40.3,7.5,61.5,7.5c26.3,0,51.8-4,75.7-11.4c-0.9-2-1.5-4.1-1.6-6.4c-0.1-8.8,0.4-14,0.4-52.4c0-38.4-5.2-52.6-23.1-63.9 c52.1-5.3,106.3-28.6,116-89.8c1.6-10,2.6-21,2.8-33.2c-0.1-52.7-25.3-71.4-30.2-80.1C403.2,134.7,394.9,116.6,391,110.3z"/>
            </svg>
        </a>
    )
}

export default Github
