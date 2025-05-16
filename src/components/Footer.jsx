import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <>
      <div class="form-container">
        <input type="text" class="input-field" placeholder="Name" />
        <input type="text" class="input-field" placeholder="Surname" />
        <input type="email" class="input-field" placeholder="Email Address" />
        <input type="password" class="input-field" placeholder="Password" />
      </div>
    </>
  );
};

export default Footer;
