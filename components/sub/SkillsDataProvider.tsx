"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface IProps {
  src: string;
  width: number;
  height: number;
  index: number;
}
function SkillsDataProvider({ src, width, height, index }: IProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  const ImageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDeley = 0.3;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={ImageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDeley }}
    >
      <Image src={src} width={width} height={height} alt="skill image" />
    </motion.div>
  );
}

export default SkillsDataProvider;
