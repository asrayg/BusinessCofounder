import React from 'react';
import './links.css';

const LegalLinks = () => {
  return (
    <div className="legal-links-container">
      <h2>Useful Legal Links</h2>

      {/* LLC Creation Links */}
      <div className="legal-section">
        <h3>LLC Creation</h3>
        <ul>
          <li>
            <a href="https://www.sba.gov/business-guide/launch-your-business/choose-business-structure" target="_blank" rel="noopener noreferrer">
              U.S. Small Business Administration: Choose Business Structure
            </a>
          </li>
          <li>
            <a href="https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" target="_blank" rel="noopener noreferrer">
              IRS Guide to Limited Liability Companies (LLCs)
            </a>
          </li>
          <li>
            <a href="https://www.legalzoom.com/llc" target="_blank" rel="noopener noreferrer">
              LegalZoom: Start Your LLC
            </a>
          </li>
        </ul>
      </div>

      {/* Trademark Links */}
      <div className="legal-section">
        <h3>Trademarks</h3>
        <ul>
          <li>
            <a href="https://www.uspto.gov/trademarks" target="_blank" rel="noopener noreferrer">
              U.S. Patent and Trademark Office (USPTO): Trademark Basics
            </a>
          </li>
          <li>
            <a href="https://www.nolo.com/legal-encyclopedia/how-file-trademark" target="_blank" rel="noopener noreferrer">
              Nolo: How to File a Trademark
            </a>
          </li>
          <li>
            <a href="https://www.legalzoom.com/business/intellectual-property/trademarks" target="_blank" rel="noopener noreferrer">
              LegalZoom: Trademark Your Business
            </a>
          </li>
        </ul>
      </div>

      {/* Copyright Links */}
      <div className="legal-section">
        <h3>Copyrights</h3>
        <ul>
          <li>
            <a href="https://www.copyright.gov/" target="_blank" rel="noopener noreferrer">
              U.S. Copyright Office
            </a>
          </li>
          <li>
            <a href="https://www.nolo.com/legal-encyclopedia/copyright-basics-29902.html" target="_blank" rel="noopener noreferrer">
              Nolo: Copyright Basics
            </a>
          </li>
          <li>
            <a href="https://www.legalzoom.com/business/intellectual-property/copyrights" target="_blank" rel="noopener noreferrer">
              LegalZoom: Copyright Registration
            </a>
          </li>
        </ul>
      </div>

      {/* Patent Links */}
      <div className="legal-section">
        <h3>Patents</h3>
        <ul>
          <li>
            <a href="https://www.uspto.gov/patents" target="_blank" rel="noopener noreferrer">
              U.S. Patent and Trademark Office (USPTO): Patent Basics
            </a>
          </li>
          <li>
            <a href="https://www.nolo.com/legal-encyclopedia/getting-patent-30158.html" target="_blank" rel="noopener noreferrer">
              Nolo: How to Get a Patent
            </a>
          </li>
          <li>
            <a href="https://www.legalzoom.com/business/intellectual-property/patents" target="_blank" rel="noopener noreferrer">
              LegalZoom: Start Your Patent
            </a>
          </li>
        </ul>
      </div>

      {/* Business Contracts Links */}
      <div className="legal-section">
        <h3>Business Contracts</h3>
        <ul>
          <li>
            <a href="https://www.sba.gov/business-guide/plan-your-business/types-business-agreements" target="_blank" rel="noopener noreferrer">
              U.S. Small Business Administration: Business Agreements
            </a>
          </li>
          <li>
            <a href="https://www.nolo.com/legal-encyclopedia/contracts-small-business-29780.html" target="_blank" rel="noopener noreferrer">
              Nolo: Business Contract Essentials
            </a>
          </li>
          <li>
            <a href="https://www.legalzoom.com/business/business-contracts" target="_blank" rel="noopener noreferrer">
              LegalZoom: Create Business Contracts
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LegalLinks;
