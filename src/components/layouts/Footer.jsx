import React from "react";
import Logo from "./Logo";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <Logo />
          <p className="mt-4 text-sm leading-relaxed">
            Building modern, scalable, and reliable web solutions to empower
            businesses and individuals worldwide.
          </p>
        </div>

        {/* Company */}
        <div>
          <h6 className="footer-title">Company</h6>
          <ul className="space-y-2">
            <li>
              <a className="link link-hover">About Us</a>
            </li>
            <li>
              <a className="link link-hover">Careers</a>
            </li>
            <li>
              <a className="link link-hover">Blog</a>
            </li>
            <li>
              <a className="link link-hover">Contact</a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h6 className="footer-title">Resources</h6>
          <ul className="space-y-2">
            <li>
              <a className="link link-hover">Documentation</a>
            </li>
            <li>
              <a className="link link-hover">Help Center</a>
            </li>
            <li>
              <a className="link link-hover">API Reference</a>
            </li>
            <li>
              <a className="link link-hover">Community</a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h6 className="footer-title">Follow Us</h6>
          <div className="flex text-secondary gap-4 mt-2">
            <a className="p-2 rounded-full bg-base-200 hover:bg-primary hover:text-white transition">
              <FaFacebookF />
            </a>
            <a className="p-2 rounded-full bg-base-200 hover:bg-primary hover:text-white transition">
              <FaTwitter />
            </a>
            <a className="p-2 rounded-full bg-base-200 hover:bg-primary hover:text-white transition">
              <FaLinkedinIn />
            </a>
            <a className="p-2 rounded-full bg-base-200 hover:bg-primary hover:text-white transition">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-base-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>
            © {new Date().getFullYear()} Hero Kidz Ltd. All rights
            reserved.
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
