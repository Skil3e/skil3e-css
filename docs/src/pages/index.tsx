import * as React from "react"
import HeadMeta from "../components/HeadMeta";
import Logo from "../components/Logo";
import { Link } from "gatsby";

const IndexPage = () => {
    return (
        <>
            <HeadMeta title={ "Home" }/>
            <section className={ "text--center h--main flex--center-middle flex--column bg--bg" }>
                <Logo height={ 200 }/>
                <h1 className={ "mt--xxl" }>Skil3e SCSS</h1>
                <p>A simple & modular CSS utility framework with dark and light mode. Skil3e css utilizes the new SASS at-rules that allows you to use only the part you need, the way you need them.</p>
                <Link className={ "button fill accent mt--lg round" } to={ "/docs" }>Documentation</Link>
            </section>
        </>
    )
}

export default IndexPage
