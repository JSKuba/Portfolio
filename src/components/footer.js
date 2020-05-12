import React from "react"

const Footer = ({ data }) => {
  return (
    <footer>
        <span>
            {data.frontmatter.footer}<div className="desc">Icons made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </span>
    </footer>
  )
}

export default Footer
