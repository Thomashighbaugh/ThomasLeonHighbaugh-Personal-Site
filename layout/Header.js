import Link from "./Link";
import React, { useState, useEffect } from "react";
import { FaLightbulb } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
const Checkbox = (props) => <input type="checkbox" id="checkbox" {...props} />;

function Header() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    const darkMode = currentTheme === "dark";
    if (darkMode) {
      setChecked(true);
    }
    const mode = checked || darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("theme", mode);
  });

  const toggleMode = () => {
    setChecked(!checked);
    localStorage.setItem("theme", checked);
  };

  const logoLink = () => (
    <Link href="/">
      <button className="logo link active">
        <img
          className="logo gray-light"
          id="img-button"
          alt="Personal Logo of Thomas Leon Highbaugh"
          src={require("../images/logo.svg")}
        />
      </button>
    </Link>
  );

  const navLinks = () => (
    <div className="nav-links">
      <Link href="https://project-lab.vercel.app/">
        <button className="link">Projects</button>
      </Link>
      <Link href="/blog">
        <button className="link">Blog</button>
      </Link>
      <Link href="/skills">
        <button className="link">Skills</button>
      </Link>
    </div>
  );

  const hamburgerMenu = () => (
    <div className="hamburger">
      <input type="checkbox" className="hamburger__checkbox" id="navi-toggle" />
      <label htmlFor="navi-toggle" className="hamburger__button">
        <span className="hamburger__text">MENU</span>
        <span className="hamburger__icon">&nbsp;</span>
      </label>
      <div className="hamburger__background">&nbsp;</div>
      <nav className="hamburger__nav">
        <ul className="hamburger__list">
          <li className="hamburger__item">
            <Link href="/">
              <a className="hamburger__link">
                <span>01</span>Home
              </a>
            </Link>
            <hr className="divider" />
          </li>
          <li className="hamburger__item">
            <Link href="https://project-lab.vercel.app/">
              <a className="hamburger__link">
                <span>02</span>Projects
              </a>
            </Link>
            <hr className="divider" />
          </li>
          <li className="hamburger__item">
            <Link href="/blog">
              <a className="hamburger__link">
                <span>B</span>log
              </a>
            </Link>
            <hr className="divider" />
          </li>

          <li className="hamburger__item">
            <Link href="/skills">
              <a className="hamburger__link">
                <span>S</span>kills
              </a>
            </Link>
            <hr className="divider" />
          </li>
        </ul>
      </nav>
    </div>
  );

  return (
    <header className="header">
      {logoLink()}
      <nav className="header__links">
        {navLinks()}
        <div className="theme-switch-container">
          <label className="theme-switch" htmlFor="checkbox">
            <Checkbox checked={checked} onChange={toggleMode} />
            <div className="lightbulb ">
              <HiOutlineLightBulb />
            </div>
          </label>
        </div>
        {hamburgerMenu()}
      </nav>
    </header>
  );
}

export default Header;
