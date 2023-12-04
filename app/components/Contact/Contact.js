"use client";
import React from "react";
import Form from "./Form";
import Link from "next/link";
import SocialList from "./SocialList";
import { oswald } from "../../fonts";
import "./styles.css";

export default function Contact() {
  return (
    <div id="contact us">
      <h2 className={`contact-title ${oswald.className}`}>Contact us</h2>
      <div className="contact-container">
        <div className="contact-wrp">
          <p className="contact-descrp">Phone:</p>
          <Link href="tel:380981234567" className="contact-link">
            <svg className="contact-svg">
              <use xlinkHref="/images/icons.svg#icon-call" />
            </svg>
            38 (098) 12 34 567
          </Link>
          <Link href="tel:380931234567" className="contact-link">
            <svg className="contact-svg">
              <use xlinkHref="/images/icons.svg#icon-call" />
            </svg>
            38 (093) 12 34 567
          </Link>

          <p className="contact-descrp">E-mail:</p>
          <Link href="mailto:office@ecosolution.com" className="contact-link">
            <svg className="contact-svg">
              <use xlinkHref="/images/icons.svg#icon-sms" />
            </svg>
            office@ecosolution.com
          </Link>

          <p className="contact-descrp">Address:</p>
          <Link
            className="contact-link"
            href="https://www.google.com.ua/maps/search/79005,+Ukraine,+Lvivstreet.+Shota+Rustaveli,+7/@49.8313557,24.0323843,17z/data=!3m1!4b1?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="contact-svg">
              <use xlinkHref="/images/icons.svg#icon-map" />
            </svg>
            <p className="contact-address">
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </p>
          </Link>

          <p className="contact-descrp">Social Networks:</p>
          <div className="contact-slc-wrap">
            <SocialList />
          </div>
        </div>
        <div className="contact-form-wrap">
          <Form />
        </div>
      </div>
    </div>
  );
}
