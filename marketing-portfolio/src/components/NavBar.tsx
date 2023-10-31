"use client";

import { useState, useRef, useEffect } from "react";
import { NAV_LINKS, OFFSETS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(() => {
    return localStorage.getItem("activeLink") || "home";
  });
  const autoScrolling = useRef(false);

  const handleLinkClick = (linkKey: string) => {
    if (autoScrolling.current) {
      setActiveLink(linkKey);
      localStorage.setItem("activeLink", linkKey);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      let activeSection = null;

      for (const key in OFFSETS) {
        if (scrollY >= OFFSETS[key]) {
          activeSection = key;
        }
      }

      // console.log("scrollY:", scrollY);
      // console.log("activeSection:", activeSection);

      if (activeSection && !autoScrolling.current) {
        setActiveLink(activeSection);
        localStorage.setItem("activeLink", activeSection);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (autoScrolling.current) {
      setTimeout(() => {
        autoScrolling.current = false;
      }, 1000);
    }
  });

  return (
    <nav className="opacity-95 sticky top-0 border-2 border-black flexAround glob max-container padding-container z-30 py-8 bg-gray-90">
      <Link href="/">
        <Image src="/boostguru.png" alt="home_logo" width={70} height={46} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <ScrollLink
              to={link.href}
              spy={true}
              smooth={true}
              offset={-85}
              duration={700}
              className={`regular-16 text-white flexCenter cursor-pointer pb-1.5 hover:font-bold ${
                activeLink === link.key ? "border-b-3 border-purple-500" : ""
              }`}
              onClick={() => {
                autoScrolling.current = true;
                handleLinkClick(link.key);
              }}
            >
              {link.label}
            </ScrollLink>
          </li>
        ))}
      </ul>

      <AiOutlineMenu color="white" className="bold-32 lg:hidden" />
    </nav>
  );
};

export default NavBar;
