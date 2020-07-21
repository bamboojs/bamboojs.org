import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"

const Header = () => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1500,
        padding: `0.2rem 1.0875rem`,
        display: `flex`,
        justifyContent: `space-between`,
      }}
    >
      <div
        style={{
          width: 10,
        }}
      >
        <Link to="/">
          <h2
            style={{
              paddingLeft: 10,
              color: `#f6f6ff`,
            }}
          >
            <span className="Bam">
            Bam
            </span>
            <span
              style={{
                color: `#51A1C0`,
              }}
            >
              b
            </span>
            <span
              style={{
                color: `#85DCFF`,
              }}
            >
              o
            </span>
            <span
              style={{
                color: `#F5E465`,
              }}
            >
              o
            </span>
          </h2>
        </Link>
      </div>
      <div
        style={{
          alignItems: `flex-end`,
          justifyItems: `center`,
          marginTop: 18,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          className="switch"
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 19l1.5-5h-4.5l7-9-1.5 5h4.5l-7 9z" />
        </svg>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
