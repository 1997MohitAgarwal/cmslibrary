import React, { useState } from "react";
import { Button } from "@cmsgov/design-system";
import { useNavigate,useLocation } from "react-router-dom";
function ComplaintType() {
  const navigate=useNavigate()
  const location=useLocation()
  const [complaintType, setComplaintType] = useState(() => {
    return location.state?.complaintType || "transactions";
  });
  const handleComplaintTypeChange = (event) => {
    setComplaintType(event.target.value);
  };

  return (
    <div className="ds-l-container ds-u-margin-y--2">
      {/* Progress Bar */}
      <div className="ds-u-fill--gray-dark">
        <div className="ds-l-container">
          <div className="ds-u-display--flex ds-u-justify-content--between ds-u-align-items--center ds-u-font-size--md">
            <span className="ds-u-color--primary ds-u-fill--warn ds-u-padding-y--1 ds-u-padding-x--4 ds-u-font-weight--bold">
              Complaint Type
            </span>
            <span className="ds-u-color--white ds-u-padding-x--4">Complaint Details</span>
            <span className="ds-u-color--white ds-u-padding-x--4">FAE Details</span>
            <span className="ds-u-color--white ds-u-padding-x--4">Review Complaint</span>
            <span className="ds-u-color--white ds-u-padding-x--4">Submitted</span>
          </div>
          <div className="ds-u-margin-top--1 ds-u-height--1 ds-u-fill--primary"></div>
        </div>
      </div>

      {/* Main Content Section */}
      <main className="ds-l-container ds-u-padding-y--4">
        <h1 className="ds-h2">Complaint Type</h1>
        <h2 className="ds-h3">Make a selection below</h2>

        <div className="ds-u-margin-y--2">
          {/* Transactions */}
          <div className="ds-u-margin-bottom--2">
            <label className="ds-c-label ds-u-display--flex ds-u-align-items--center">
              <input
                type="radio"
                name="complaint-type"
                value="transactions"
                checked={complaintType === "transactions"}
                onChange={handleComplaintTypeChange}
                className="ds-c-input ds-u-display--block ds-u-margin-right--1"
              />
              <span>Transactions</span>
            </label>
            <p className="ds-u-margin-top--1 ds-u-font-size--sm ds-u-color--gray">
              Select if a covered entity is in violation of the following transactions: claims and encounter information, payment and remittance advice, claims status, eligibility, enrollment and disenrollment, referrals and authorizations, coordination of benefits and premium payment.
            </p>
          </div>

          {/* Code Sets */}
          <div className="ds-u-margin-bottom--2">
            <label className="ds-c-label ds-u-display--flex ds-u-align-items--center">
              <input
                type="radio"
                name="complaint-type"
                value="code-sets"
                checked={complaintType === "code-sets"}
                onChange={handleComplaintTypeChange}
                className="ds-c-input ds-u-display--block ds-u-margin-right--1"
              />
              <span>Code Sets</span>
            </label>
            <p className="ds-u-margin-top--1 ds-u-font-size--sm ds-u-color--gray">
              Select if a covered entity is in violation of the following Code Sets: HCPCS (Ancillary Services/Procedures), CPT-4 (Physicians Procedures), CDT (Dental Terminology), ICD-9 (Diagnosis and Hospital Inpatient Procedures), ICD-10 (As of October 1, 2015) and NDC (National Drug Codes) codes with which providers and health plans are familiar, are the adopted code sets for procedures, diagnoses, and drugs.
            </p>
          </div>

          {/* Unique Identifiers */}
          <div className="ds-u-margin-bottom--2">
            <label className="ds-c-label ds-u-display--flex ds-u-align-items--center">
              <input
                type="radio"
                name="complaint-type"
                value="unique-identifiers"
                checked={complaintType === "unique-identifiers"}
                onChange={handleComplaintTypeChange}
                className="ds-c-input ds-u-display--block ds-u-margin-right--1"
              />
              <span>Unique Identifiers</span>
            </label>
            <p className="ds-u-margin-top--1 ds-u-font-size--sm ds-u-color--gray">
              Select if a covered entity is in violation of the following Unique Identifiers: National Provider Identifier (NPI), Employer Identification Number (EIN).
            </p>
          </div>

          {/* Operating Rules */}
          <div className="ds-u-margin-bottom--2">
            <label className="ds-c-label ds-u-display--flex ds-u-align-items--center">
              <input
                type="radio"
                name="complaint-type"
                value="operating-rules"
                checked={complaintType === "operating-rules"}
                onChange={handleComplaintTypeChange}
                className="ds-c-input ds-u-display--block ds-u-margin-right--1"
              />
              <span>Operating Rules</span>
            </label>
            <p className="ds-u-margin-top--1 ds-u-font-size--sm ds-u-color--gray">
              Select if a covered entity is suspected of being in violation of any of the adopted Operating Rules: Electronic Funds Transfer/Electronic Remittance Advice (EFT/ERA), Health Care Claim Status, and Eligibility for a Health Plan.
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="ds-u-display--flex ds-u-justify-content--between ds-u-margin-top--4">
          <Button
            onClick={()=>{navigate("/")}}
            variation="transparent"
            className="ds-u-margin-right--2 ds-u-fill--primary-light ds-u-color--white"
          >
            ← Welcome
          </Button>
          <Button
            variation="transparent"
            className="ds-u-margin-right--2 ds-u-fill--primary-light ds-u-color--white"
          >
            Cancel
          </Button>
          <Button
          onClick={()=>navigate("/complaint-details", { state: { complaintType } })}
            variation="primary"
            className="ds-u-fill--primary-light ds-u-color--white"
            disabled={!complaintType} // Disable if no selection is made
          >
            Complaint Information →
          </Button>
        </div>
      </main>
    </div>
  );
}

export default ComplaintType;