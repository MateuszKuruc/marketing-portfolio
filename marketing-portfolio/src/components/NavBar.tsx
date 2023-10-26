import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="border-2 border-black flexAround glob max-container padding-container relative z-30 py-5 bg-gray-50">
      <Link href="/">
        <Image src="/boostguru.png" alt="home_logo" width={70} height={46} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-white flexCenter cursor-pointer pb-1.5 hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default NavBar;
