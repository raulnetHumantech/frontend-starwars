import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
       <Navigation></Navigation>
      </div>
    </div>
  );
};

export default Header;
