"use client";

import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaGlobe, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full bg-black/30 text-gray-200 shadow-lg px-4 py-6 backdrop-blur-lg z-10 relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <div className="w-full flex flex-col md:flex-row justify-around gap-8 flex-wrap">
          
          {/* Connect Section */}
          <div className="min-w-[200px] flex flex-col items-start">
            <h2 className="font-bold text-[16px] mb-2">Connect</h2>
            <a
              href="https://github.com/sauravkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-3 hover:text-purple-400 transition-colors"
            >
              <RxGithubLogo className="text-lg" />
              <span className="ml-2 text-[15px]">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/sauravkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-3 hover:text-purple-400 transition-colors"
            >
              <RxLinkedinLogo className="text-lg" />
              <span className="ml-2 text-[15px]">LinkedIn</span>
            </a>
            <a
              href="https://sauravkumar-portfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-3 hover:text-purple-400 transition-colors"
            >
              <FaGlobe className="text-lg" />
              <span className="ml-2 text-[15px]">Portfolio</span>
            </a>
          </div>

          {/* Contact Section */}
          <div className="min-w-[200px] flex flex-col items-start">
            <h2 className="font-bold text-[16px] mb-2">Contact</h2>
            <a
              href="mailto:sauravkumar9447@gmail.com"
              className="flex items-center mb-3 hover:text-purple-400 transition-colors"
            >
              <MdEmail className="text-lg" />
              <span className="ml-2 text-[15px]">sauravkumar9447@gmail.com</span>
            </a>
            <a
              href="tel:+917557787962"
              className="flex items-center mb-3 hover:text-purple-400 transition-colors"
            >
              <FaPhone className="text-lg" />
              <span className="ml-2 text-[15px]">+91 7557787962</span>
            </a>
          </div>

          {/* Education Section */}
          <div className="min-w-[200px] flex flex-col items-start">
            <h2 className="font-bold text-[16px] mb-2">Education</h2>
            <p className="text-[15px] mb-3">Rungta College of Engineering and Technology</p>
            <p className="text-[15px] mb-3">B.Tech in Information Technology</p>
            <p className="text-[15px] mb-3">2022 - 2026</p>
          </div>
        </div>

        <div className="mt-8 text-center text-[14px]">
          &copy; Saurav Kumar 2025 | Aspiring Software Engineer
        </div>
      </div>
    </footer>
  );
};

export default Footer;
