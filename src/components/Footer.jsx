import React from 'react'

function Footer() {
  return (
    <div className="ds-l-container ds-u-margin-x--auto">
         {/* Footer Section */}
      <footer className="ds-u-fill--gray-lightest ds-u-border-top--1 ds-u-padding--2 ds-u-display--flex ds-u-justify-content--between">
        <a
          href="/"
          className="ds-u-color--primary ds-u-text-decoration--none ds-u-margin-right--2"
        >
          Home
        </a>
        <a
          href="/privacy"
          className="ds-u-color--primary ds-u-text-decoration--none ds-u-margin-right--2"
        >
          Privacy Policy
        </a>
        <a
          href="/security"
          className="ds-u-color--primary ds-u-text-decoration--none"
        >
          Security Policy
        </a>
      </footer>
    </div>
  )
}

export default Footer