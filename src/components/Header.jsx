import React from "react";
import "../css/Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div>
          <h1>
            <span className="bgtext">GOTO</span>EGYPT
          </h1>
        </div>
        <div className="cl">
          <p>Home</p>
          <p>Explore</p>
          <p>Articles</p>
          <p>Galleries</p>
          <p>Contact</p>
        </div>
        <div></div>
      </header>
      <main>
        <img
          className="egypti"
          src="https://timbuktutravel.imgix.net/2022/12/egypt-country-guide-cairo.png?auto=compress%2Cformat&fit=scale&h=600&ixlib=php-1.1.0&q=50&w=900&wpsize=large"
          alt="egypt"
        />
        <div className="text">
          <h1 className="text1">THE ANCIENT WORLD</h1>
          <h1 className="text2">Discover the last remaining of </h1>
          <h1 className="text3">ancient Egypt</h1>
        </div >
        <div className="text10">
          <p className="text11">THE ANCIENT</p>
          <p className="text12">Egyptian <samp className="bgtext2">civilization</samp></p>
        </div>
        <p className="text13">
          The ancient Egyptian civilization, famous for its pyramids, pharaohs,
          mummies, and tombs, flourished for thousands of years. But what was
          its lasting impact?
        </p>
        <p className="text14">
        Watch the video below to learn how ancient Egypt contributed to
        modern-day society with its many cultural developments, particularly in
        language & mathematics.
        </p>
      </main>
    </>
  );
};

export default Header;
