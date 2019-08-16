import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby"


const Home = () => {
    const data = useStaticQuery(graphql`
        query{
            site {
                siteMetadata {
                    title, description, author
                }
            }
        }
    `)
    return (
        <section class="portfolio-sections" id="home">
            <h1>{data.site.siteMetadata.title}</h1>
            <h2>{data.site.siteMetadata.description}</h2>
        </section>
    )
}

export default Home;