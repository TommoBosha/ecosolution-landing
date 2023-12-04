"use client";
import React from "react";
import Accordion from "./Accordion";
import { oswald } from "../../fonts";
import "./styles.css";

import Button from "../Button";
import ArrowDown from "../ArrowDown";

export default function Faq() {
  return (
    <div>
      <div className="faq-container" id="faq">
        <h2 className={`faq-title ${oswald.className}`}>
          Frequently Asked Questions
        </h2>

        <Accordion />
        <div className="faq-descrp-container">
          <h2 className={`faq-second-title ${oswald.className}`}>
            Frequently Asked Questions
          </h2>
          <div className="faq-contact-wrp">
            <p className="">Didn&#39;t find the answer to your question?</p>

            <Button className="faq-btn" to={"#contact us"}>
              Contact Us
              <ArrowDown />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
