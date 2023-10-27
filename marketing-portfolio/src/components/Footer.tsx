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
    <footer className="flexCenter mb-0 bg-gray-90 py-10 max-container">
      <div className="flex flex-col items-center gap-4">
        <p className="text-blue-50 bold-20">Social</p>
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
    </footer>
  );
};

export default Footer;
