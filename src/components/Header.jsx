import React from 'react'

function Header() {
  return (
    <div className="ds-base ds-u-margin-x--auto">
    {/* Header Section */}
    <header className="">
      <div className="ds-l-container">
        {/* Container for CMS Logo and Compliance Image */}
        <div className="ds-u-display--flex ds-u-align-items--center ds-u-justify-content--center">
          <img
            src="/assets/images/cms.png"
            alt="CMS Logo"
            className="ds-u-text-align--center"
          />
        </div>

        {/* Flex container for Navigation Links */}
        <div className="ds-u-display--flex ds-u-fill--primary ds-u-padding--2 ds-u-justify-content--between ds-u-font-size--sm">
          <div className="ds-u-display--flex">
            <a
              href="#"
              className="ds-u-color--white ds-u-text-decoration--none ds-u-margin-left--4 ds-u-margin-right--3"
            >
              Home
            </a>
            <a
              href="#"
              className="ds-u-color--white ds-u-text-decoration--none ds-u-margin-right--3"
            >
              About ASETT
            </a>
            <a
              href="#"
              className="ds-u-color--white ds-u-text-decoration--none ds-u-margin-right--3"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="ds-u-color--white ds-u-text-decoration--none"
            >
              Support
            </a>
          </div>
          <div className="ds-u-display--flex">
            <a
              href="#"
              className="ds-u-color--white ds-u-text-decoration--none ds-u-margin-right--4"
            >
              Register
            </a>
            <a
              href="#"
              className="ds-u-color--white ds-u-text-decoration--none ds-u-margin-right--4"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </header>
    </div>
  )
}

export default Header