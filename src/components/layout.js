import React from "react"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ scale, scrollY, data, children}) => {

  return (
    <>
      <Header scale={scale} scrollY={scrollY} data={data.allMarkdownRemark.edges[0].node} siteTitle={data.site.siteMetadata.title} />
      <main>
        {children}
      </main>
      <Footer data={data.allMarkdownRemark.edges[0].node} siteTitle={data.site.siteMetadata.title}/>
    </>
  )
}

export default Layout
