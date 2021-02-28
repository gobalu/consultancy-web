import React from "react";
import "./StickyArrow.css";

const StickyArrow = () => {
  function scrolLToTop() {
    return window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <img
      className="topArrow"
      alt="arrow"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Circle-icons-arrow-up.svg/1200px-Circle-icons-arrow-up.svg.png"
      onClick={scrolLToTop}
      height="50"
      width="50"
    />
  );
};
export default StickyArrow;
