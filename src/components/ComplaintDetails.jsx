import React from "react";
import { Button } from "@cmsgov/design-system";
import { useNavigate, useLocation } from "react-router-dom";

function ComplaintDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { complaintType } = location.state || {};

  return (
    <div className="ds-l-container ds-u-margin-y--2">
      {/* Progress Bar */}
      <div className="ds-u-fill--gray-dark">
        <div className="ds-l-container">
          <div className="ds-u-display--flex ds-u-justify-content--between ds-u-align-items--center ds-u-font-size--md">
            <span className="ds-u-fill--secondary ds-u-color--white ds-u-padding-y--1 ds-u-padding-x--4">Complaint Type</span>
            <span className="ds-u-color--primary ds-u-fill--warn ds-u-padding-y--1 ds-u-padding-x--4 ds-u-font-weight--bold">
              Complaint Details
            </span>
            <span className="ds-u-color--white ds-u-padding-x--4">FAE Details</span>
            <span className="ds-u-color--white ds-u-padding-x--4">Review Complaint</span>
            <span className="ds-u-color--white ds-u-padding-x--4">Submitted</span>
          </div>
          <div className="ds-u-margin-top--1 ds-u-height--1 ds-u-fill--primary"></div>
        </div>
      </div>

      {/* Main Content Section */}
      <main className="ds-l-container ds-u-padding-y--4">
        <h1 className="ds-h2">Complaint Details</h1>

        {/* Display the selected complaint type (optional) */}
        {complaintType && (
          <div className="ds-u-margin-y--2">
            <p>
              <strong>Selected Complaint Type:</strong>{" "}
              {complaintType.charAt(0).toUpperCase() + complaintType.slice(1)}
            </p>
          </div>
        )}

        {/* Anonymity Section */}
        <div className="ds-u-margin-y--2 ds-u-padding--2 ds-u-fill--gray-lightest">
          <div className="ds-u-display--flex ds-u-align-items--center">
            <label
              className="ds-c-label ds-u-margin--0"
              style={{ width: "400px" }}
            >
              Do you want to remain anonymous during this investigation?*
            </label>
            <div className="ds-u-display--flex ds-u-align-items--center">
              <label className="ds-c-label ds-u-margin-right--2">
                <input
                  type="radio"
                  name="anonymous"
                  value="yes"
                  className="ds-c-input ds-u-display--inline-block ds-u-margin-right--1"
                />
                Yes
              </label>
              <label className="ds-c-label">
                <input
                  type="radio"
                  name="anonymous"
                  value="no"
                  className="ds-c-input ds-u-display--inline-block ds-u-margin-right--1"
                />
                No
              </label>
            </div>
          </div>
          <p className="ds-u-margin-top--1 ds-u-font-size--sm ds-u-color--gray">
            If you select yes, CMS will not share your information with the Filed Against Entity (FAE) during the investigation process. However, information provided in this complaint is subject to rules and policies under the Freedom of Information Act (FOIA).
          </p>
        </div>

        {/* Form Fields with Alternating Backgrounds */}
        <div className="ds-u-margin-y--2">
          {/* Row 1: Complainant Organization Name */}
          <div className="ds-u-display--flex ds-u-align-items--center ds-u-padding--2 ds-u-fill--white">
            <label
              className="ds-c-label ds-u-margin--0"
              style={{ width: "400px" }}
              htmlFor="org-name"
            >
              Complainant Organization Name*
            </label>
            <input
              type="text"
              id="org-name"
              className="ds-c-input ds-u-flex--auto ds-u-margin-left--2"
              placeholder="--None--"
            />
          </div>

          {/* Row 2: Complainant Organization Type */}
          <div className="ds-u-display--flex ds-u-align-items--center ds-u-padding--2 ds-u-fill--gray-lightest">
            <label
              className="ds-c-label ds-u-margin--0"
              style={{ width: "400px" }}
              htmlFor="org-type"
            >
              Complainant Organization Type
            </label>
            <select
              id="org-type"
              className="ds-c-input ds-u-flex--auto ds-u-margin-left--2"
            >
              <option value="">--None--</option>
            </select>
          </div>

          {/* Row 3: Complainant Organization Type (Other) */}
          <div className="ds-u-display--flex ds-u-align-items--center ds-u-padding--2 ds-u-fill--white">
            <label
              className="ds-c-label ds-u-margin--0"
              style={{ width: "400px" }}
              htmlFor="org-type-other"
            >
              Complainant Organization Type (Other)
            </label>
            <input
              type="text"
              id="org-type-other"
              className="ds-c-input ds-u-flex--auto ds-u-margin-left--2"
              placeholder="--None--"
            />
          </div>

          {/* Row 4: Complainant Organization Role */}
          <div className="ds-u-display--flex ds-u-align-items--center ds-u-padding--2 ds-u-fill--gray-lightest">
            <label
              className="ds-c-label ds-u-margin--0"
              style={{ width: "400px" }}
              htmlFor="org-role"
            >
              Complainant Organization Role
            </label>
            <input
              type="text"
              id="org-role"
              className="ds-c-input ds-u-flex--auto ds-u-margin-left--2"
              placeholder="--None--"
            />
          </div>

          {/* Row 5: Complainant Organization Phone Number */}
          <div className="ds-u-display--flex ds-u-align-items--center ds-u-padding--2 ds-u-fill--white">
            <label
              className="ds-c-label ds-u-margin--0"
              style={{ width: "400px" }}
              htmlFor="org-phone"
            >
              Complainant Organization Phone Number*
            </label>
            <input
              type="text"
              id="org-phone"
              className="ds-c-input ds-u-flex--auto ds-u-margin-left--2"
              placeholder="(xxx) xxx-xxxx"
            />
          </div>

          {/* Row 6: Complainant Title */}
          <div className="ds-u-display--flex ds-u-align-items--center ds-u-padding--2 ds-u-fill--gray-lightest">
            <label
              className="ds-c-label ds-u-margin--0"
              style={{ width: "400px" }}
              htmlFor="title"
            >
              Complainant Title*
            </label>
            <input
              type="text"
              id="title"
              className="ds-c-input ds-u-flex--auto ds-u-margin-left--2"
              placeholder="--None--"
            />
          </div>

          {/* Row 7: Complainant First Name */}
          <div className="ds-u-display--flex ds-u-align-items--center ds-u-padding--2 ds-u-fill--white">
            <label
              className="ds-c-label ds-u-margin--0"
              style={{ width: "400px" }}
              htmlFor="first-name"
            >
              Complainant First Name*
            </label>
            <input
              type="text"
              id="first-name"
              className="ds-c-input ds-u-flex--auto ds-u-margin-left--2"
              placeholder="--None--"
            />
          </div>

          {/* Row 8: Complainant MI */}
          <div className="ds-u-display--flex ds-u-align-items--center ds-u-padding--2 ds-u-fill--gray-lightest">
            <label
              className="ds-c-label ds-u-margin--0"
              style={{ width: "400px" }}
              htmlFor="mi"
            >
              Complainant MI
            </label>
            <input
              type="text"
              id="mi"
              className="ds-c-input ds-u-flex--auto ds-u-margin-left--2"
            />
          </div>

          {/* Row 9: Complainant Last Name */}
          <div className="ds-u-display--flex ds-u-align-items--center ds-u-padding--2 ds-u-fill--white">
            <label
              className="ds-c-label ds-u-margin--0"
              style={{ width: "400px" }}
              htmlFor="last-name"
            >
              Complainant Last Name*
            </label>
            <input
              type="text"
              id="last-name"
              className="ds-c-input ds-u-flex--auto ds-u-margin-left--2"
              placeholder="--None--"
            />
          </div>

          {/* Row 10: Complainant Address Line 1 */}
          <div className="ds-u-display--flex ds-u-align-items--center ds-u-padding--2 ds-u-fill--gray-lightest">
            <label
              className="ds-c-label ds-u-margin--0"
              style={{ width: "400px" }}
              htmlFor="address1"
            >
              Complainant Address Line 1*
            </label>
            <input
              type="text"
              id="address1"
              className="ds-c-input ds-u-flex--auto ds-u-margin-left--2"
            />
          </div>

          {/* Row 11: Complainant Address Line 2 */}
          <div className="ds-u-display--flex ds-u-align-items--center ds-u-padding--2 ds-u-fill--white">
            <label
              className="ds-c-label ds-u-margin--0"
              style={{ width: "400px" }}
              htmlFor="address2"
            >
              Complainant Address Line 2
            </label>
            <input
              type="text"
              id="address2"
              className="ds-c-input ds-u-flex--auto ds-u-margin-left--2"
            />
          </div>

          {/* Row 12: Complainant City/Town */}
          <div className="ds-u-display--flex ds-u-align-items--center ds-u-padding--2 ds-u-fill--gray-lightest">
            <label
              className="ds-c-label ds-u-margin--0"
              style={{ width: "400px" }}
              htmlFor="city"
            >
              Complainant City/Town*
            </label>
            <input
              type="text"
              id="city"
              className="ds-c-input ds-u-flex--auto ds-u-margin-left--2"
            />
          </div>

          {/* Row 13: Complainant State/Territory */}
          <div className="ds-u-display--flex ds-u-align-items--center ds-u-padding--2 ds-u-fill--white">
            <label
              className="ds-c-label ds-u-margin--0"
              style={{ width: "400px" }}
              htmlFor="state"
            >
              Complainant State/Territory*
            </label>
            <select
              id="state"
              className="ds-c-input ds-u-flex--auto ds-u-margin-left--2"
            >
              <option value="">--None--</option>
            </select>
          </div>

          {/* Row 14: Complainant Zip Code */}
          <div className="ds-u-display--flex ds-u-align-items--center ds-u-padding--2 ds-u-fill--gray-lightest">
            <label
              className="ds-c-label ds-u-margin--0"
              style={{ width: "400px" }}
              htmlFor="zip"
            >
              Complainant Zip Code*
            </label>
            <div className="ds-u-display--flex ds-u-align-items--center ds-u-flex--auto ds-u-margin-left--2">
              <input
                type="text"
                id="zip"
                className="ds-c-input"
                value="55555"
                readOnly
              />
              <input
                type="text"
                placeholder="Ext."
                className="ds-c-input ds-u-margin-left--1"
                style={{ width: "100px" }}
              />
            </div>
          </div>

          {/* Row 15: Complainant Email Address */}
          <div className="ds-u-display--flex ds-u-align-items--center ds-u-padding--2 ds-u-fill--white">
            <label
              className="ds-c-label ds-u-margin--0"
              style={{ width: "400px" }}
              htmlFor="email"
            >
              Complainant Email Address*
            </label>
            <input
              type="email"
              id="email"
              className="ds-c-input ds-u-flex--auto ds-u-margin-left--2"
              value="example@demo.com"
              readOnly
            />
          </div>

          {/* Row 16: Complainant Contact Phone Number */}
          <div className="ds-u-display--flex ds-u-align-items--center ds-u-padding--2 ds-u-fill--gray-lightest">
            <label
              className="ds-c-label ds-u-margin--0"
              style={{ width: "400px" }}
              htmlFor="contact-phone"
            >
              Complainant Contact Phone Number*
            </label>
            <div className="ds-u-display--flex ds-u-align-items--center ds-u-flex--auto ds-u-margin-left--2">
              <input
                type="text"
                id="contact-phone"
                className="ds-c-input"
                placeholder="(xxx) xxx-xxxx"
              />
              <input
                type="text"
                placeholder="Ext."
                className="ds-c-input ds-u-margin-left--1"
                style={{ width: "100px" }}
              />
            </div>
          </div>

          {/* Row 17: Complainant Cell Phone Number */}
          <div className="ds-u-display--flex ds-u-align-items--center ds-u-padding--2 ds-u-fill--white">
            <label
              className="ds-c-label ds-u-margin--0"
              style={{ width: "400px" }}
              htmlFor="cell-phone"
            >
              Complainant Cell Phone Number
            </label>
            <div className="ds-u-display--flex ds-u-align-items--center ds-u-flex--auto ds-u-margin-left--2">
              <input
                type="text"
                id="cell-phone"
                className="ds-c-input"
                placeholder="(xxx) xxx-xxxx"
              />
              <input
                type="text"
                placeholder="Ext."
                className="ds-c-input ds-u-margin-left--1"
                style={{ width: "100px" }}
              />
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="ds-u-display--flex ds-u-justify-content--between ds-u-margin-top--4">
          <Button
            onClick={() =>navigate("/complaint-type", { state: { complaintType } })}
            variation="transparent"
            className="ds-u-margin-right--2 ds-u-fill--primary-light ds-u-color--white"
          >
            ← Specify Complaint Type
          </Button>
          <Button
            variation="transparent"
            className="ds-u-margin-right--2 ds-u-fill--primary-light ds-u-color--white"
          >
            Cancel
          </Button>
          <Button variation="primary" className="ds-u-fill--primary-light ds-u-color--white">
            Filed Against Entity Information →
          </Button>
        </div>
      </main>
    </div>
  );
}

export default ComplaintDetails;