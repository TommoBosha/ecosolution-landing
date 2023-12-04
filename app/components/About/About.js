import React from "react";
import { oswald } from "../../fonts";
import Image from "next/image";
import "./styles.css";

export default function About() {
  return (
    <>
      <div className="about-container" id="about">
        <h2 className={`about-header ${oswald.className}`}>
          Main values of our company
        </h2>
        <div className="about-content-wrp">
          <p className="about-contect">
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world&#39;s energy needs.
          </p>
        </div>
      </div>

      <div className="grid-wrp">
        <div className="grid-item">
          <div className="grid-card">
            <div className="grid-card-wrap">
              <Image
                src="/images/maximize-circle.svg"
                alt="Maximize circle SVG"
                width={16}
                height={16}
                className="grid-svg"
              />
              <h3 className={`grid-title ${oswald.className}`}>Openness</h3>
            </div>
            <span className="grid-span"></span>
            <p className="grid-desc">
              to the world, people, new ideas and projects
            </p>
          </div>

          <div className="grid-card">
            <div className="grid-card-wrap">
              <Image
                src="/images/global-edit.svg"
                alt="Global edit SVG"
                width={16}
                height={16}
                className="grid-svg"
              />
              <h3 className={`grid-title ${oswald.className}`}>
                Responsibility
              </h3>
            </div>
            <span className="grid-span"></span>
            <p className="grid-desc">
              we are aware that the results of our work have an impact on our
              lives and the lives of future generations
            </p>
          </div>
        </div>

        <Image
          src="/images/wind-farms-fields.jpg"
          alt="Wind farms fields"
          width={604}
          height={403}
          className="grid-img"
        />
        <Image
          src="/images/man-worker-firld-by-solar-panels.jpg"
          alt="Man worker field by solar panels"
          width={604}
          height={403}
          className="grid-img"
        />

        <div className="grid-item">
          <div className="grid-card">
            <div className="grid-card-wrap">
              <Image
                src="/images/cpu-charge.svg"
                alt="Cpu charge SVG"
                width={16}
                height={16}
                className="grid-svg"
              />
              <h3 className={`grid-title ${oswald.className}`}>Innovation</h3>
            </div>
            <span className="grid-span"></span>
            <p className="grid-desc">
              we use the latest technology to implement non-standard solutions
            </p>
          </div>

          <div className="grid-card">
            <div className="grid-card-wrap">
              <Image
                src="/images/ranking.svg"
                alt="Ranking SVG"
                width={16}
                height={16}
                className="grid-svg"
              />
              <h3 className={`grid-title ${oswald.className}`}>Quality</h3>
            </div>
            <span className="grid-span"></span>
            <p className="grid-desc">
              we do not strive to be the first among others, but we want to be
              the best in our business
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
