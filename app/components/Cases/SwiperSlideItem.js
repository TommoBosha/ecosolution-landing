import Image from "next/image";
import React from "react";
import "./styles.css";

export default function SwiperSlideItem({ item }) {
  return (
    <div className="item-container">
      <div className="item-img-wrap">
        <Image src={item.img} alt={item.type} width={596} height={395} />
      </div>

      <div className="item-descr">
        <div className="item-wrp-content">
          <div className="item-wrp-title">
            <p>{item.title}</p>
          </div>

          <button className="item-btn">
            <svg className="item-svg">
              <use xlinkHref="/images/icons.svg#icon-arrow-right" />
            </svg>
          </button>
        </div>

        <div className="item-text-wrp">
          <p>{item.type}</p>
          <p>{item.date}</p>
        </div>
      </div>
    </div>
  );
}
