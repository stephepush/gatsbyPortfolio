import React from "react"
import { Link } from "gatsby"

import 'normalize.css';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Home from "../components/home"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Nav from "../components/nav";

const IndexPage = () => {
  {/* <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout> */}
  return(
    <div>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default IndexPage
