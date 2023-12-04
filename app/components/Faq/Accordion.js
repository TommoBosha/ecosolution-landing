import React, { useState } from "react";
import data from "../../../data/faq.json";
import "./styles.css";

export default function Accordion() {
  const [isOpen, setIsOpen] = useState("1");
  const toggleOpen = (id) => {
    setIsOpen((prevIsOpen) => (prevIsOpen === id ? null : id));
  };

  return (
    <ul className="faq-wrp">
      {data.map(({ id, question, answer }) => (
        <li key={id}>
          <div className="acrd-quest-wrp ">
            <button className="acrd-btn-open">
              {isOpen === id ? (
                <svg onClick={() => toggleOpen(id)}>
                  <use xlinkHref="/images/icons.svg#minus" />
                </svg>
              ) : (
                <svg onClick={() => toggleOpen(id)}>
                  <use xlinkHref="/images/icons.svg#plus" />
                </svg>
              )}
            </button>
            <p className="acr-qst-text">{question}</p>
          </div>
          {isOpen === id && (
            <p className={`${"acr-answ-text"} ${isOpen === id ? "open" : ""}`}>
              {answer}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
