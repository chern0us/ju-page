import React from "react";

const navPanel = () => (
  <div className="header_navpanel">
    <div className="navpanel_element active">HOME</div>
    <div className="navpanel_element">STORE</div>
    <div className="navpanel_element">DELIVERY</div>
    <div className="navpanel_element">ABOUT</div>
    <div className="navpanel_element">CONTACT</div>
  </div>
);
const socials = () => (
  <div className="header_social">
    <div className="social_button">
      <i class="fab fa-twitter" />
    </div>
    <div className="social_button">
      <i class="fab fa-facebook-f" />
    </div>
    <div className="social_button">
      <i class="fab fa-google-plus-g" />
    </div>
    <div className="social_button">
      <i class="fab fa-instagram" />
    </div>
  </div>
);
const logo = () => (
  <img className="header_logo" src={require("./img/logo.png")} alt="logo" />
);
const header = () => (
  <div className="header">
    <div className="header_container">
      {logo()}
      {navPanel()}
      {socials()}
    </div>
  </div>
);

const banner = () => (
  <div className="banner">
    <div className="banner_container">
      <div className="banner_text">Made in Brazil</div>
      <div className="banner_text big">Template JU JU</div>
      <button className="banner_button">i want to know</button>
    </div>
    <img className="banner_image" src={require("./img/banner.png")} />
  </div>
);
const banner2 = () => (
  <div className="banner">
    <div className="banner_container">
      <div className="banner_text colored">Bye</div>
      <div className="banner_text big colored">Template JU JU</div>
    </div>
    <img className="banner_image" src={require("./img/apple.png")} />
  </div>
);
const pie = percent => (
  <div
    className={`pie-wrapper progress-${
      percent === 224 ? 95 : percent === 22 ? 45 : 75
    } style-2`}
  >
    <span className="label">
      {percent}
      <span class="smaller" />
    </span>
    <div className="pie">
      <div className="left-side half-circle" />
      <div class="right-side half-circle" />
    </div>
    <div className="shadow" />
    <div className="text big faded">LOREM IPSUM</div>
  </div>
);
const pies = () => (
  <div className="pies_container">
    <div className="pies_text">
      <div className="text">Welcome</div>
      <div className="text big">modern & creative</div>
      <div className="text faded">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
    </div>
    <div className="pies_strip">
      {pie(224)}
      {pie(22)}
      {pie(16)}
    </div>
  </div>
);
const quote = () => (
  <div className="quote">
    <div className="quote_header">
      <div className="pies_text">
        <div className="text">Hello</div>
        <div className="text big">quality & fresh</div>
        <div className="text faded">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
    </div>
    <div className="quote_block">
      <div className="quote_wrapper">
        <div className="quote_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          asperiores in fuga laudantium rerum illum explicabo magnam laboriosam
          harum animi? Harum exercitationem commodi magni error maxime quibusdam
          dolor, esse neque.
        </div>
      </div>
    </div>
  </div>
);
const quote2 = () => (
  <div className="quote">
    <div className="quote_header">
      <div className="pies_text">
        <div className="text">Thanks</div>
        <div className="text big">today & forever</div>
        <div className="text faded">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
    </div>
    <div className="quote_block">
      <div className="quote_wrapper">
        <div className="quote_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          asperiores in fuga laudantium rerum illum explicabo magnam laboriosam
          harum animi?
        </div>
      </div>
    </div>
  </div>
);
const products = () => (
  <div className="products">
    <div className="products_element">
      <img className="products_image" src={require("./img/ic1.png")} />
      <div className="element_text">LOREM IPSUM</div>
    </div>
    <div className="products_element">
      <img className="products_image" src={require("./img/ic2.png")} />
      <div className="element_text">LOREM IPSUM</div>
    </div>
    <div className="products_element">
      <img className="products_image" src={require("./img/ic3.png")} />
      <div className="element_text">LOREM IPSUM</div>
    </div>
    <div className="products_element">
      <img className="products_image" src={require("./img/ic4.png")} />
      <div className="element_text">LOREM IPSUM</div>
    </div>
    <div className="products_element">
      <img className="products_image" src={require("./img/ic5.png")} />
      <div className="element_text">LOREM IPSUM</div>
    </div>
  </div>
);
const fruits = () => (
  <div className="fruits_wrapper">
    <div className="fruits_container">
      <div className="fruits_element">
        <img className="fruits_image" src={require("./img/f1.png")} />
        <div className="fruits_price">$12.99</div>
      </div>
      <div className="fruits_element">
        <img className="fruits_image" src={require("./img/f2.png")} />
        <div className="fruits_price">$12.99</div>
      </div>
      <div className="fruits_element">
        <img className="fruits_image" src={require("./img/f3.png")} />
        <div className="fruits_price">$12.99</div>
      </div>
      <div className="fruits_element">
        <img className="fruits_image" src={require("./img/f4.png")} />
        <div className="fruits_price">$12.99</div>
      </div>
    </div>
    <div className="dots">
      <div className="dot" />
      <div className="dot active" />
      <div className="dot" />
    </div>
  </div>
);
const fruitsBanner = () => (
  <div className="fruitsBanner">
    <div className="fuitsBanner_container">
      <div className="fuitsBanner_text">Try the Best</div>
      <div className="fuitsBanner_text faded left">ONLY</div>
      <div className="fuitsBanner_text faded">NATURAL</div>
      <p className="fuitsBanner_quote">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores
        in fuga laudantium rerum illum explicabo magnam laboriosam harum animi?
        Harum exercitationem commodi magni error maxime quibusdam dolor, esse
        neque.
      </p>
      <button className="fruitsBanner_button">buy</button>
    </div>
    <img className="fruitsBanner_image" src={require("./img/fruits.png")} />
  </div>
);
const footer = () => (
  <div className="footer">
    <div className="footer_container">
      {navPanel()}
      <div className="header_social forced">
    <div className="social_button">
      <i class="fab fa-twitter" />
    </div>
    <div className="social_button">
      <i class="fab fa-facebook-f" />
    </div>
    <div className="social_button">
      <i class="fab fa-google-plus-g" />
    </div>
    <div className="social_button">
      <i class="fab fa-instagram" />
    </div>
  </div>
    </div>
  </div>
);
export default class App extends React.Component {
  render() {
    return (
      <div>
        {header()}
        <div className="content">
          {banner()}
          {pies()}
          {quote()}
          {products()}
          {fruits()}
          {fruitsBanner()}
          {quote2()}
          {banner2()}
          {footer()}
        </div>
      </div>
    );
  }
}
