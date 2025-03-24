"use client";
import React, { useEffect, useRef, useState } from "react";
import Img from "./img";

function Header() {
  const [isScrollDown, setIsScrollDown] = useState<boolean>(true);
  const [isFixedHeader, setFixedHeader] = useState<boolean>(true);
  const [isFixedNav, setFixedNav] = useState<boolean>(true);
  const headerRef = useRef(null);

  useEffect(() => {
    let currentScrollY = window.pageYOffset;

    if (currentScrollY === 0) setIsScrollDown(true);

    const handleFixedNavBar = () => {
      setIsScrollDown(false);
      if (window.scrollY >= currentScrollY) {
        setFixedNav(true); // hide
      } else {
        setFixedNav(false); // unhide
      }

      currentScrollY = window.scrollY;
    };

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setFixedHeader(true);
      } else {
        setFixedHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleFixedNavBar);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleFixedNavBar);
    };
  }, []);

  return (
    <header
      className={`header ${isScrollDown ? "relative" : null} ${
        !isScrollDown && isFixedHeader ? "fixed w-100" : null
      }`}
    >
      <p ref={headerRef} className={`top-header`}>
        30% OFF if you order in the next <span className="timer">06:40</span>
      </p>
      <nav
        className={`${
          !isScrollDown && isFixedNav ? "hide" : "unhide"
        } bg-white`}
      >
        <a href="#" className="bottom-header">
          <Img
            src="/assets/logo.avif"
            className="main-logo"
            alt="doctors-note-logo"
          />
        </a>
      </nav>
    </header>
  );
}

export default Header;
