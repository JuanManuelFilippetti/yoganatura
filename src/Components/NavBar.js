import React from "react"
import { Link } from "react-scroll";
import styles from "./NavBar.module.css";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false)
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Services",
    },
    {
      id: 3,
      link: "HowWeWork",
    },
    {
      id: 4,
      link: "Benefits",
    },
  ]

  return (
    <div className={!navBarOpen === true ? styles.navBar : styles.navOpen}>
      {!navBarOpen && <p className={styles.logo}>Yoga Natura</p>}
      {!navBarOpen ? (
        <AiOutlineMenu onClick={() => setNavBarOpen(!navBarOpen)} size={25} />
      ) : (
        <AiOutlineClose onClick={() => setNavBarOpen(!navBarOpen)} size={25} />
      )}
      {navBarOpen && (
        <ul>
          {links.map ( (x) => (
            <div>
              <Link onClick={() => setNavBarOpen(false)} to={x.link} smooth duration={500} className={styles.navLink}> {x.link === "HowWeWork" ? "How we work" : x.link}</Link>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;