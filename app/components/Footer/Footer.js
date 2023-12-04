"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SocialList from "../Contact/SocialList";
import Link from "next/link";
import "./styles.css";

export default function Footer() {
  const [scrolled, setScrolled] = useState(0);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrolled(scrollPosition > 0);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    const clickToUp = document.getElementById("main");
    if (clickToUp) {
      const offset = 120;
      const targetPosition =
        clickToUp.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: targetPosition - offset,
        behavior: "smooth",
      });
    }
  };
  return (
    <div id="footer" scrolled={scrolled.toString()}>
      <span className="footer-line"></span>
      <div className="logo-container">
        <Image src="/images/logo.svg" alt="Logo" width={269} height={40} />
        <button className="footer-btn" type="button" onClick={handleClick}>
          <svg className="footer-btn-svg ">
            <use xlinkHref="/images/icons.svg#icon-arrow-right" />
          </svg>
        </button>
      </div>

      <div className="link-container">
        <SocialList />
      </div>

      <div className="adress-container">
        <Link
          href="https://www.google.com.ua/maps/search/79005,+Ukraine,+Lvivstreet.+Shota+Rustaveli,+7/@49.8313557,24.0323843,17z/data=!3m1!4b1?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          className="map-link"
        >
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </Link>
        <Link href="mailto:office@ecosolution.com" className="email-link">
          office@ecosolution.com
        </Link>
        <p>ecosolution © 2023</p>
      </div>
    </div>
  );
}
