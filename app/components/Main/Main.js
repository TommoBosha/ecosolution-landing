import React from "react";
import { oswald } from "../../fonts";
import Button from "../Button";
import Image from "next/image";
import './styles.css'

export default function Main() {
  return (
    <div className="main-container"  id="main">
      <div className="descr-wrp">
        <h1 className={`descr-header ${oswald.className}`}>
          RENEWABLE ENERGY For any task
        </h1>
        <div className="text-wrp">
          <p className="descr-content">
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </p>
          <div className="btn-wrp">
            <Button to={"#cases"} className="lnm-button">
              Learn more
              <Image
                src="/images/arrow-right.svg"
                alt="Arrow right"
                width={32}
                height={32}
              />
            </Button>
          </div>
        </div>
      </div>

      <ul className="contact-list">
        <li className="contact"> 79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</li>
        <li className="contact">office@ecosolution.com</li>
        <li className="contact">ecosolution © 2023</li>
      </ul>
      <Image
      src='/images/wind-turbine-clean-energy.jpg'
      alt="Wind turbine clean energy"
      width={1242}
      height={828}
      className="img"
      />
    </div>
  );
}
