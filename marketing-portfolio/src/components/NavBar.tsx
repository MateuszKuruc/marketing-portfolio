"use client";

import { useState, useRef, useEffect } from "react";
import { NAV_LINKS, OFFSETS_DESKTOP, OFFSETS_MOBILE } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(true);
  const [activeLink, setActiveLink] = useState(() => {
    return localStorage.getItem("activeLink") || "home";
  });
  const autoScrolling = useRef(false);

  const isMobile = window.innerWidth <= 768;

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
      const offsets = isMobile ? OFFSETS_MOBILE : OFFSETS_DESKTOP;

      for (const key in offsets) {
        if (scrollY >= offsets[key]) {
          activeSection = key;
        }
      }

      console.log("scrollY:", scrollY);
      console.log("activeSection:", activeSection);

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
    <section className="sticky top-0 z-30 opacity-95">
      <nav className="border-2 border-black flexAround glob max-container padding-container py-8 bg-gray-90">
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

        <AiOutlineMenu
          color="white"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="bold-32 lg:hidden"
        />
      </nav>
      {showMobileMenu && (
        <div className="bg-blue-50 p-10 flex flex-col max-container">
          <ul className="h-full gap-12">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <ScrollLink
                  to={link.href}
                  spy={true}
                  smooth={true}
                  offset={-320}
                  duration={700}
                  className={`medium-18 text-black flexCenter cursor-pointer pb-1.5 hover:font-bold ${
                    activeLink === link.key
                      ? "border-b-3 border-purple-500"
                      : ""
                  }`}
                  onClick={() => {
                    autoScrolling.current = true;
                    handleLinkClick(link.key);
                    setShowMobileMenu(!showMobileMenu);
                  }}
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default NavBar;
