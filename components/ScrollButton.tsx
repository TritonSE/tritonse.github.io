import React, { useEffect, useState } from "react";

import CustomImage from "./CustomImage";

export default function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
             in place of 'smooth' */
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  });

  return (
    <a
      style={{
        display: isVisible ? "inline" : "none",
        position: "fixed",
        bottom: "3px",
        right: "30px",
        zIndex: "1",
      }}
    >
      <CustomImage
        onClick={scrollToTop}
        imageKey="icons/scroll-to-top"
        alt="Logo"
        width={50}
        height={50}
      />
    </a>
  );
}
