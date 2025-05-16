import React from "react";
import "../css/Intro.css";

function Intro() {
  return (
    <>
      <header className="header2">
        <h1 className="IText1">Рукомендуемые туры</h1>
        <div className="con">
          <div className="ICart">
            <img
              className="IImg1"
              src="https://timbuktutravel.imgix.net/2022/12/egypt-country-guide-cairo.png?auto=compress%2Cformat&fit=scale&h=600&ixlib=php-1.1.0&q=50&w=900&wpsize=large"
              alt=""
            />
            <div className="IText2">культура</div>
          </div>

          <div className="ICart2">
            <img
              className="IImg2"
              src="https://timbuktutravel.imgix.net/2022/12/egypt-country-guide-cairo.png?auto=compress%2Cformat&fit=scale&h=600&ixlib=php-1.1.0&q=50&w=900&wpsize=large"
              alt=""
            />
            <div className="IText2">экскурсия</div>
          </div>

          <div className="ICart3">
            <img
              className="IImg3"
              src="https://timbuktutravel.imgix.net/2022/12/egypt-country-guide-cairo.png?auto=compress%2Cformat&fit=scale&h=600&ixlib=php-1.1.0&q=50&w=900&wpsize=large"
              alt=""
            />
            <div className="IText2">о багов</div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Intro;
