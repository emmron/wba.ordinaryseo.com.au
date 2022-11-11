import * as React from "react"
import PropTypes from "prop-types"
import Footer from "./footer"
import BrandPanel from "./brandpanel"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"
import Team from "./team"
import MegaMenu from "./megamenu"
import HeaderNew from "./headernew"
import Stat from "./stat.js"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container-fluid p-0">
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <HeaderNew />
      <main>
        {children}
      </main>
      <Stat />
      <Team />
      <BrandPanel />
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
