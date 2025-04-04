import React from "react";
import { Button } from "@cmsgov/design-system";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="ds-base ds-u-margin-x--auto">
      {/* Header Section */}
      {/* <header className="">
        <div className="ds-l-container">
          <div className="ds-u-display--flex ds-u-align-items--center ds-u-justify-content--center">
            <img
              src="/assets/images/cms.png"
              alt="CMS Logo"
              className="ds-u-text-align--center"
            />
          </div>

          <div className="ds-u-display--flex ds-u-fill--primary ds-u-padding--2 ds-u-justify-content--between ds-u-font-size--sm">
            <div className="ds-u-display--flex">
              <a
                href="/"
                className="ds-u-color--white ds-u-text-decoration--none ds-u-margin-right--2"
              >
                Home
              </a>
              <a
                href="/about"
                className="ds-u-color--white ds-u-text-decoration--none ds-u-margin-right--2"
              >
                About ASETT
              </a>
              <a
                href="/contact"
                className="ds-u-color--white ds-u-text-decoration--none ds-u-margin-right--2"
              >
                Contact Us
              </a>
              <a
                href="/support"
                className="ds-u-color--white ds-u-text-decoration--none"
              >
                Support
              </a>
            </div>
            <div className="ds-u-display--flex">
              <a
                href="/register"
                className="ds-u-color--white ds-u-text-decoration--none ds-u-margin-right--2"
              >
                Register
              </a>
              <a
                href="/login"
                className="ds-u-color--white ds-u-text-decoration--none"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </header> */}

      {/* Main Content Section */}
      <main className="ds-l-container ds-u-padding-y--2">
        <h1 className="ds-h2 ds-u-color--primary">
          Administrative Simplification Enforcement and Testing Tool (ASETT)
        </h1>

        <p className="ds-text ds-u-margin-y--2">
          <strong>Disclaimer:</strong> If you file a complaint without
          registration, you will not be able to view your{" "}
          <span className="ds-u-color--error">complaints</span>, upload
          supporting documents, correspond electronically, or test transactions.
        </p>

        <p className="ds-text ds-u-margin-y--2">
          The following is the list of steps you will take in order to file a
          complaint regarding HIPAA Transactions and Code Sets, Unique
          Identifiers, and/or Operating Rules. If you wish to file a Health
          Insurance Privacy complaint, please visit the{" "}
          <a
            href="https://www.hhs.gov/ocr"
            className="ds-u-color--primary ds-u-text-decoration--underline"
          >
            Office for Civil Rights (OCR)
          </a>{" "}
          web.
        </p>

        <ol className="ds-u-margin-y--2 ds-u-padding-left--4">
          <li className="ds-u-margin-y--1">
            Identify the type of HIPAA/ACA complaint
          </li>
          <li className="ds-u-margin-y--1">Provide your contact information</li>
          <li className="ds-u-margin-y--1">
            Identify the Filed Against Entity
          </li>
          <li className="ds-u-margin-y--1">Describe the HIPAA/ACA violation</li>
          <li className="ds-u-margin-y--1">Review and Submit</li>
        </ol>

        <p className="ds-text ds-u-margin-y--2">
          You can review all information entered before submitting your
          complaint to CMS. Once the complaint is submitted, CMS will review all
          information and respond to your complaint.
        </p>

        <p className="ds-text ds-u-margin-y--2">
          Click the Complaint Type button below to begin filing your complaint.
        </p>

        {/* Buttons */}
        <div className="ds-u-display--flex ds-u-justify-content--between ds-u-margin-top--4">
          <Button className="ds-u-margin-right--2 ds-u-fill--primary-light ds-u-color--base">
            Cancel
          </Button>
          <Button
            onClick={() => navigate("/complaint-type")}
            className="ds-u-fill--primary-light ds-u-color--base"
          >
            Complaint Type <span>→</span>
          </Button>
        </div>
      </main>
    </div>
  );
}

export default Home;
