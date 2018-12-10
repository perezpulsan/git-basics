import React from "react";

const Header = props => {
  return (
    <header className="header">
      <h1>What's your name revered</h1>
      <span className="tagline">{props.tagline}</span>
    </header>
  );
};

export default Header;
