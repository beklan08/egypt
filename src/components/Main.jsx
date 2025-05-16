import React from "react";
import "../css/Main.css";

const Main = () => {
  return (
    <>
      <header className="header3">
        <div className="co">
          <p className="Etext">
            Egypt is a country rich in history, ancient monuments, and diverse
            nature. Here you'll find everything — from majestic pyramids and
            temples to vibrant markets and the peaceful banks of the Nile. It's
            a place worth discovering.
          </p>
        </div>
        <div className="nt">
          <img
            className="EImg"
            src="https://timbuktutravel.imgix.net/2022/12/egypt-country-guide-cairo.png?auto=compress%2Cformat&fit=scale&h=600&ixlib=php-1.1.0&q=50&w=900&wpsize=large"
            alt=""
          />
        </div>
      </header>
    </>
  );
};

export default Main;
