"use client";

import { useState, useRef, useEffect } from "react";
import { NAV_LINKS, OFFSETS_DESKTOP, OFFSETS_MOBILE } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";

import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");
  const autoScrolling = useRef(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const iconsRef = useRef<HTMLDivElement | null>(null);

  const isOnHomePage = () => {
    return pathname === "/";
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        navRef.current &&
        !navRef.current.contains(target)
      ) {
        setShowMobileMenu(false);
      }
    };

    if (showMobileMenu) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showMobileMenu]);

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

  const handleDesktopMenuClick = (linkKey: string) => {
    autoScrolling.current = true;
    handleLinkClick(linkKey);
  };

  const handleMobileMenuClick = (linkKey: string) => {
    autoScrolling.current = true;
    handleLinkClick(linkKey);
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <section className="sticky top-0 z-30 opacity-95">
      <nav
        ref={navRef}
        className="border-2 border-black flexAround glob max-container padding-container py-4 lg:py-8 bg-gray-90"
      >
        <Link href="/" aria-label="logo Bartosz Kuruc">
          <Image
            src="/logo_barti.png"
            alt="home_logo"
            width={100}
            height={70}
          />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              {isOnHomePage() ? (
                <ScrollLink
                  to={link.key}
                  href={link.href}
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={700}
                  className={`regular-18 font-standard text-white flexCenter cursor-pointer pb-1.5 hover:text-coral-50 ${
                    activeLink === link.key ? "border-b-3 border-coral-50" : ""
                  }`}
                  onClick={() => handleDesktopMenuClick(link.key)}
                  aria-label={`Przejdź do: ${link.label}`}
                >
                  {link.label}
                </ScrollLink>
              ) : (
                <Link
                  href={`/${link.href}`}
                  className={`regular-18 font-standard text-white flexCenter cursor-pointer pb-1.5 hover:text-coral-50 ${
                    activeLink === link.key ? "border-b-3 border-coral-50" : ""
                  }`}
                  onClick={() => handleDesktopMenuClick(link.key)}
                  aria-label={`Przejdź do: ${link.label}`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div ref={iconsRef}>
          {showMobileMenu ? (
            <AiOutlineClose
              aria-label="otwórz menu mobilne"
              color="white"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="bold-32 lg:hidden"
            />
          ) : (
            <AiOutlineMenu
              aria-label="zamknij menu mobilne"
              color="white"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="bold-32 lg:hidden"
            />
          )}
        </div>
      </nav>
      {showMobileMenu && (
        <div
          ref={mobileMenuRef}
          className="absolute w-full bg-blue-50 font-standard p-8 max-container border-b-4 border-t-4 border-white"
        >
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                {isOnHomePage() ? (
                  <ScrollLink
                    to={link.key}
                    href={link.href}
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={700}
                    className={`medium-18 text-black flexCenter pb-1.5 ${
                      activeLink === link.key
                        ? "border-b-3 border-coral-50"
                        : ""
                    }`}
                    onClick={() => handleMobileMenuClick(link.key)}
                    aria-label={`Przejdź do: ${link.label}`}
                  >
                    {link.label}
                  </ScrollLink>
                ) : (
                  <Link
                    href={`/${link.href}`}
                    className="medium-18 text-black flexCenter pb-1.5"
                    onClick={() => handleMobileMenuClick(link.key)}
                    aria-label={`Przejdź do: ${link.label}`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default NavBar;
