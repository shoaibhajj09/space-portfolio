"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
function SkillText() {
  return (
    <div className="w-full h-auto flex-col items-center justify-center text-center">
      <motion.div
        className="Welcome-box py-[15px] z-50 m-auto  px-[7px] border border-[#7042f88b] "
        variants={slideInFromTop}
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">Think better with Next js</h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium  mt-[10px] text-center mb-[15px]"
      >
        Making apps with modern technologies
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="cursive text-[25px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Never miss a task deadline or idea
      </motion.div>
    </div>
  );
}

export default SkillText;
