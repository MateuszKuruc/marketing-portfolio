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
          <p className="text-white font-medium regular-20">Kontakt</p>
          <p className="text-white font-standard regular-18">
            Email:{" "}
            <Link
              className="text-blue-50 font-standard regular-18"
              href={`mailto:${process.env.CONTACT_EMAIL}`}
            >
              {process.env.CONTACT_EMAIL}
            </Link>
          </p>
          <p className="text-white font-standard regular-18">
            Telefon:{" "}
            <span className="text-blue-50 font-standard regular-18">
              {process.env.CONTACT_NUMBER}
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-white font-medium regular-20">Social</p>
          <div className="flex ">
            <Link
              target="_blank"
              href="placeholder"
              aria-label="Link do profilu Facebook"
            >
              <AiOutlineFacebook color="white" size="50" />
            </Link>
            <Link
              target="_blank"
              href="placeholderlink"
              aria-label="Link do profilu Instagram"
            >
              <AiOutlineInstagram color="white" size="50" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/bartoszkuruc/"
              aria-label="Link do profilu LinkedIn"
            >
              <AiOutlineLinkedin color="white" size="50" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
