import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/styles/main.scss'
import About from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'

const IndexPage = () => {
  const [scrollY, setScrollY] = useState(0)

  const getShadow = (target, value1, value2) => {
    if (document.getElementById(target)) {
      return ((scrollY - document.getElementById(target).offsetTop) / document.getElementById(target).getBoundingClientRect().height * value1) - value2
    } else {
      return 0
    }
  }

  const getScale = () => {
    return (scrollY / window.innerHeight) + 1
  }

  const handleScroll = () => {
    setScrollY(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const mdData = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            htmlAst
            frontmatter {
              nav
              footer
              navBtn
            }
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  let target = ''
  const articles = {}
  mdData.allMarkdownRemark.edges[0].node.htmlAst.children.filter(v => v.type !== 'text').map(v => {
    if(v.tagName === 'h2') {
      target = v.children[0].value
      articles[target] = []
    }
    return articles[target].push(v)
  })

  return (
    <Layout scale={getScale()} scrollY={scrollY} data={mdData}>
      <SEO title="JSKuba - Portfolio" />
      <About scale={3} shadow={getShadow('about', 30, 30)} data={articles.About} />
      <Projects shadow={getShadow('projects', 100, 30)} data={articles.Projects} />
      <Contact shadow={getShadow('projects', -30, 30)} data={articles.Contact} />
    </Layout>
  )
}

export default IndexPage