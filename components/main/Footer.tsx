import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { RxDiscordLogo, RxGithubLogo } from "react-icons/rx";

function Footer() {
  return (
    <div className="w-full h-full bg-transparent  text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex  flex-row  items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-center ">
            <div className="font-bold text-[24px] ">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-20">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-20">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-20">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-center ">
            <div className="font-bold text-[24px] ">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-20">
              <FaInstagram  />
              <span className="text-[15px] ml-[6px] ">
                Instagram
              </span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-20">
              <FaX />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-20">
              <FaLinkedin />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-center ">
            <div className="font-bold text-[24px] ">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-20">
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-20">
              <span className="text-[15px] ml-[6px]">Learning about me </span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-20">
              <span className="text-[15px] ml-[6px]">
                shoaibhajhussen@gmail.com
              </span>
            </p>
          </div>
        </div>
        <div className="mb-[20px] text-[15px] text-center mt-10">
          &copy; Shoaib Hajj 2025 Inc . All rights reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
