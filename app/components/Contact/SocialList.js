import Link from "next/link";
import React from "react";
import "./styles.css";

export default function SocialList() {
  return (
    <ul className="list">
      <li>
        <Link href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <svg className=" svg-wrp ">
            <use xlinkHref="/images/icons.svg#icon-facebook" />
          </svg>
        </Link>
      </li>
      <li>
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <svg className=" svg-wrp svg-inst ">
            <use xlinkHref="/images/icons.svg#icon-instagram" />
          </svg>
        </Link>
      </li>
    </ul>
  );
}
