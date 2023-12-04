"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import BurgerMenu from "./BurgerMenu";
import Button from "../Button";
import "./styles.css";
import ArrowDown from "../ArrowDown";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header-container  ${isScrolled ? "scrolled" : ""}`}>
      <Image
        src={isScrolled ? "/images/logo-hover.svg" : "/images/logo.svg"}
        alt="Logo"
        width={269}
        height={40}
        aria-label="Ecosolution"
      />
      <div className="button-wrp">
        <button className="menu-btn" onClick={toggleOpen}>
          <Image src="/images/menu.svg" alt="Menu" width={16} height={16} />
        </button>

        <Button className="button" to={"#contact us"}>
          Get in touch <ArrowDown />
        </Button>
      </div>
      {isOpen ? (
        <BurgerMenu
          toggleOpen={toggleOpen}
          setActive={setActiveLink}
          active={activeLink}
        />
      ) : null}
    </div>
  );
}
