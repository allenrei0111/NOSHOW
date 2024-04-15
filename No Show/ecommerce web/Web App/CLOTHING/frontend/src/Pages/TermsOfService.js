import React from 'react';
import './CSS/TermsOfService.css';

const TermsOfService = () => {
  return (
    <div className="terms-container">
      <h2 className="title">Terms of Service</h2>
      <section className="section">
        <p>Welcome to LanderStylez! By accessing this website, you agree to our terms and conditions. Do not continue if you do not agree.</p>
      </section>

      <section className="section">
        <h3 className="subtitle">Cookies</h3>
        <p>We use cookies in accordance with our Privacy Policy. By using our website, you consent to the use of cookies.</p>
      </section>

      <section className="section">
        <h3 className="subtitle">License</h3>
        <p>All content on LanderStylez is owned by us. Do not republish without permission.</p>
        <p>You may not use our materials for any commercial purpose without obtaining a license.</p>
      </section>

      <section className="section">
        <h3 className="subtitle">User Comments</h3>
        <p>User comments reflect the opinions of the individuals. We do not endorse or filter comments.</p>
        <p>However, we reserve the right to remove any comments that violate our community guidelines or are deemed inappropriate.</p>
      </section>

      <section className="section">
        <h3 className="subtitle">Hyperlinking to Our Content</h3>
        <p>You may link to our website, provided that the link:</p>
        <ul>
          <li>Is not in any way deceptive</li>
          <li>Does not falsely imply sponsorship, endorsement or approval of your site</li>
          <li>Fits within the context of your site</li>
        </ul>
        <p>We reserve the right to request removal of any link to our website.</p>
      </section>

      <section className="section">
        <h3 className="subtitle">Content Liability</h3>
        <p>We shall not be held responsible for any content that appears on your website. You agree to protect and defend us against all claims arising on your website.</p>
        <p>No link(s) should appear on any website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
      </section>

      <section className="section">
        <h3 className="subtitle">Disclaimer</h3>
        <p>We do not ensure that the information on this website is correct, nor do we warrant its completeness or accuracy. We do not promise to ensure that the website remains available or that the material on the website is kept up to date.</p>
        <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website.</p>
      </section>

    </div>
  );
};

export default TermsOfService;
