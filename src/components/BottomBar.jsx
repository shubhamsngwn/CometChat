import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import "../App.css";

export default function BottomBar() {
  return (
    <div>
      <div className="bg-[#0f0f1c] h-[5rem] border-t text-xs flex justify-between items-center">
        <div className="icons flex justify-center items-center gap-4 w-[30%] text-white options">
          <a>© 2023 CometChat</a>
          <a href="#" className="text-white options">
            Terms of Use
          </a>
          <a href="#" className="text-white options">
            Privacy Policy
          </a>
        </div>

        <div className="flex justify-center align-center gap-4 w-[40%] social">
          <a href="#" className="cmn">
            <FaFacebookF className="icns"/>Facebook
          </a>
          <a href="#" className="cmn">
            <FaLinkedinIn className="icns"/>LinkedIn
          </a>
          <a href="#" className="cmn">
            <FaInstagram className="icns"/>Instagram
          </a>
          <a href="#" className="cmn">
            <FaTwitter className="icns"/>Twitter
          </a>
          <a href="#" className="cmn">
            <FaGithub className="icns"/>GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
