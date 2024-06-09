import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiJetpackcompose,
  SiFirebase,
  SiGithub,
  SiLaravel,
  SiCodeigniter,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaAndroid, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

import kotlinIcon from "../assets/Skill/kotlin.svg";
import javaIcon from "../assets/Skill/java.svg";
import apiIcon from "../assets/Skill/api.svg";
import xmlIcon from "../assets/Skill/xml.svg";
import androidStudioIcon from "../assets/Skill/android_studio.svg";

const iconVariants = (duration) => ({
  initial: { y: -5 },
  animate: {
    y: [5, -5],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            src={androidStudioIcon}
            alt="Android Studio"
            className="w-16 h-16"
            title="Android Studio"
          />
        </motion.div>

        <motion.div
          variants={iconVariants(1.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            src={kotlinIcon}
            alt="Kotlin"
            className="w-16 h-16"
            title="Kotlin"
          />
        </motion.div>

        <motion.div
          variants={iconVariants(1.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={javaIcon} alt="Java" className="w-16 h-16" title="Java" />
        </motion.div>

        <motion.div
          variants={iconVariants(1.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaAndroid className="text-6xl text-green-500" title="Android Sdk" />
        </motion.div>

        <motion.div
          variants={iconVariants(1.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={apiIcon} alt="APIs" title="APIs" className="w-16 h-16" />
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJetpackcompose className="text-6xl text-green-500" title="Jetpack Compose" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={xmlIcon} alt="XML" title="XML" className="w-16 h-16" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaDatabase className="text-6xl text-white-500" title="Database" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiFirebase className="text-6xl text-yellow-500" title="Firebase" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiGithub className="text-6xl text-black-500" title="Git Hub" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiLaravel className="text-6xl text-black-500" title="Laravel" />
        </motion.div>

        <motion.div
          variants={iconVariants(3.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiCodeigniter
            className="text-6xl text-red-500"
            title="Codeigniter"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
