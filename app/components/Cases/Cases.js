"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import cases from "/data/cases.json";
import { fira300, oswald } from "../../fonts";

import "swiper/css";
import "./styles.css";
import SwiperSlideItem from "./SwiperSlideItem";

export default function Cases() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

  const totalSlides = cases.length;
  const slidesPerView = isTablet ? 2 : 1;
  const spaceBetween = isDesktop ? 48 : 24;

  const formattedNumber = (num) => {
    return num.toString().padStart(2, "0");
  };

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };
  return (
    <>
      <div className="cases-container" id="cases">
        <div className="cases-wrp">
          <h2 className={`cases-title ${oswald.className}`}>
            Successful cases of our company
          </h2>
          <div className={`pagination-wrp ${fira300.className}`}>
            <div className="swiper-pagination"></div>
            <div className="btn-wrp">
              <button type="button" className="prev pagination-btn">
                <svg className="pagin-svg-left ">
                  <use xlinkHref="/images/icons.svg#icon-arrow-right" />
                </svg>
              </button>
              <button type="button" className="next pagination-btn">
                <svg className="pagin-svg-right ">
                  <use xlinkHref="/images/icons.svg#icon-arrow-right" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <Swiper
          initialSlide={0}
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          loop={true}
          pagination={{
            type: "fraction",
            el: ".swiper-pagination",
            formatFractionTotal: () => formattedNumber(totalSlides),
            formatFractionCurrent: () => formattedNumber(currentSlide + 1),
          }}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          onSlideChange={handleSlideChange}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {cases.map((item) => {
            return (
              <SwiperSlide key={item.date} className="md:w-full">
                <SwiperSlideItem item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
