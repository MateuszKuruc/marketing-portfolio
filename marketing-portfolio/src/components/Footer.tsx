import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="flexCenter mb-0 bg-gray-90 py-10 max-container border-t-4">
      <div className="flex flex-col gap-8 md:flex-row md:gap-12">
        <div className="flex flex-col items-center gap-2">
          <p className="text-white bold-20">Kontakt</p>
          <p className="text-white regular-16">
            Email:{" "}
            <Link
              className="text-blue-50"
              href={`mailto:${process.env.CONTACT_EMAIL}`}
            >
              {process.env.CONTACT_EMAIL}
            </Link>
          </p>
          <p className="text-white regular-16">
            Telefon:{" "}
            <span className="text-blue-50">{process.env.CONTACT_NUMBER}</span>
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-white bold-20">Social</p>
          <div className="flex ">
            <Link href="placeholder">
              <AiOutlineFacebook color="white" size="50" />
            </Link>
            <Link href="placeholderlink">
              <AiOutlineInstagram color="white" size="50" />
            </Link>
            <Link href="placeholderlink">
              <AiOutlineLinkedin color="white" size="50" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
