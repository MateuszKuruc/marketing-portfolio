"use client";

import { useState, useRef, useEffect } from "react";
import { NAV_LINKS, OFFSETS_DESKTOP, OFFSETS_MOBILE } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  // const [activeLink, setActiveLink] = useState(() => {
  //   return localStorage.getItem("activeLink") || "home";
  // });
  const [activeLink, setActiveLink] = useState("home");
  const autoScrolling = useRef(false);

  const handleLinkClick = (linkKey: string) => {
    if (autoScrolling.current) {
      setActiveLink(linkKey);
      localStorage.setItem("activeLink", linkKey);
    }
  };

  useEffect(() => {
    // Check if localStorage is available (on the client side)
    if (typeof window !== "undefined") {
      const storedActiveLink = localStorage.getItem("activeLink");
      if (storedActiveLink) {
        setActiveLink(storedActiveLink);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      let isMobile = null;
      typeof window !== "undefined"
        ? (isMobile = window.innerWidth <= 768)
        : null;

      let activeSection = null;
      const offsets = isMobile ? OFFSETS_MOBILE : OFFSETS_DESKTOP;

      for (const key in offsets) {
        if (scrollY >= offsets[key]) {
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

    const handleResize = () => {
      if (window.innerWidth > 768 && showMobileMenu) {
        setShowMobileMenu(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [showMobileMenu]);

  useEffect(() => {
    if (autoScrolling.current) {
      setTimeout(() => {
        autoScrolling.current = false;
      }, 1000);
    }
  });

  return (
    <section className="sticky top-0 z-30 opacity-95">
      <nav className="border-2 border-black flexAround glob max-container padding-container py-4 lg:py-8 bg-gray-90">
        <Link href="/">
          <Image src="/logo1.png" alt="home_logo" width={70} height={70} />
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
                className={`regular-18 font-standard text-white flexCenter cursor-pointer pb-1.5 hover:text-coral-50 ${
                  activeLink === link.key ? "border-b-3 border-coral-50" : ""
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
        {showMobileMenu ? (
          <AiOutlineClose
            color="white"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="bold-32 lg:hidden"
          />
        ) : (
          <AiOutlineMenu
            color="white"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="bold-32 lg:hidden"
          />
        )}
      </nav>
      {showMobileMenu && (
        <div className="bg-blue-50 font-standard p-8 max-container border-b-4 border-t-4 border-white">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <ScrollLink
                  to={link.href}
                  spy={true}
                  smooth={true}
                  offset={-320}
                  duration={700}
                  className={`medium-18 text-black flexCenter pb-1.5 ${
                    activeLink === link.key ? "border-b-3 border-coral-50" : ""
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
