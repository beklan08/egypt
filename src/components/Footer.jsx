import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <>
      <div classNamcl="form-container">
        <input type="text" className="input-field" placeholder="Name" />
        <input type="text" className="input-field" placeholder="Surname" />
        <input
          type="email"
          className="input-field"
          placeholder="Email Address"
        />
        <input type="password" className="input-field" placeholder="Password" />
      </div>
    </>
  );
};

export default Footer;
