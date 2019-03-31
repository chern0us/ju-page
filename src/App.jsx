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
const quote = () => <div className="quote">
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
    <div className="quote_text">            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            asperiores in fuga laudantium rerum illum explicabo magnam
            laboriosam harum animi? Harum exercitationem commodi magni error
            maxime quibusdam dolor, esse neque.</div>
  </div>
</div> 
export default class App extends React.Component {
  render() {
    return (
      <div>
        {header()}
        <div className="content">
          {banner()}
          {pies()}
          {quote()}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            asperiores in fuga laudantium rerum illum explicabo magnam
            laboriosam harum animi? Harum exercitationem commodi magni error
            maxime quibusdam dolor, esse neque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            asperiores in fuga laudantium rerum illum explicabo magnam
            laboriosam harum animi? Harum exercitationem commodi magni error
            maxime quibusdam dolor, esse neque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            asperiores in fuga laudantium rerum illum explicabo magnam
            laboriosam harum animi? Harum exercitationem commodi magni error
            maxime quibusdam dolor, esse neque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            asperiores in fuga laudantium rerum illum explicabo magnam
            laboriosam harum animi? Harum exercitationem commodi magni error
            maxime quibusdam dolor, esse neque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            asperiores in fuga laudantium rerum illum explicabo magnam
            laboriosam harum animi? Harum exercitationem commodi magni error
            maxime quibusdam dolor, esse neque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            asperiores in fuga laudantium rerum illum explicabo magnam
            laboriosam harum animi? Harum exercitationem commodi magni error
            maxime quibusdam dolor, esse neque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            asperiores in fuga laudantium rerum illum explicabo magnam
            laboriosam harum animi? Harum exercitationem commodi magni error
            maxime quibusdam dolor, esse neque.
          </p>
        </div>
      </div>
    );
  }
}
