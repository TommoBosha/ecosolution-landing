import React, { useEffect } from "react";
import SocialList from "../Contact/SocialList";
import data from "../../../data/burger-menu.json";
import "./styles.css";

export default function BurgerMenu({ toggleOpen, setActive, active }) {
  useEffect(() => {
    const onEscClick = (event) => {
      if (event.code === "Escape") {
        toggleOpen();
      }
    };

    window.addEventListener("keydown", onEscClick);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onEscClick);
      document.body.style.overflow = "unset";
    };
  }, [toggleOpen]);

  const onBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      toggleOpen();
    }
  };

  const handleClick = (id) => {
    const targetElement = document.getElementById(id.toLowerCase());

    if (targetElement) {
      window.scroll({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
      setActive(id);
      toggleOpen();
    }
  };
  return (
    <div className="burger-backdrop" onClick={onBackdropClick}>
      <div className="menu-container">
        <div className="menu-link-wrp">
          <button className="menu-cls-btn" type="button" onClick={toggleOpen}>
            <svg className="menu-svg">
              <use xlinkHref="/images/icons.svg#icon-close" />
            </svg>
            <p className="">close</p>
          </button>

          <nav className="menu-nav">
            <ul className="">
              {data.map(({ id, title }) => (
                <li className="menu-nav-item" key={id}>
                  <a
                    href={`#${title.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(id);
                    }}
                    className={active === id ? "active" : "menu-link"}
                  >
                    <div className="menu-link-content">
                      <p className="">{title}</p>
                      <svg className="menu-nav-svg">
                        <use xlinkHref="/images/icons.svg#icon-arrow-right" />
                      </svg>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="social-list-container">
            <SocialList />
          </div>
        </div>
      </div>
    </div>
  );
}
