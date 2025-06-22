"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { SiReactiveresume } from "react-icons/si";

import ParticleContainer from "./ParticleContainer";
// const githubdp = "/githubdp.jpg"; // ✅ Public images can be accessed directly

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-16 sm:mb-0 text-center scroll-mt-[100rem] particles-section pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4"
    >
      <ParticleContainer />
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://avatars.githubusercontent.com/u/95865224?v=4"
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-0 sm:px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-white max-w-[80rem] mx-auto text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Priyabrata.</span> <br />
        I&apos;m a{" "}
        <span className="font-bold">
          final-year Computer Science student
        </span>{" "}
        and <br />a <span className="font-bold">software engineer</span> based
        in Kolkata. <br />I specialize in{" "}
        <span className="font-bold">C++, Golang, and NextJS</span>, and <br />I
        enjoy solving challenging problems on{" "}
        <span className="font-bold">LeetCode</span>.
      </motion.h1>

      {/* Social Links (Centered + Stacked on Mobile, Side-by-Side on Desktop) */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none px-4 text-lg font-medium mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {/* GitHub */}
        <a
          className="group w-full sm:w-auto text-center bg-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950"
          href="https://github.com/PriyabrataMo"
          target="_blank"
        >
          GitHub <FaGithub className="opacity-70" />
        </a>

        {/* LinkedIn */}
        <a
          className="group w-full sm:w-auto text-center bg-gray-950 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          href="https://www.linkedin.com/in/priyabrata-mondal/"
          target="_blank"
        >
          <span className="opacity-70">LinkedIn</span>
          <BsLinkedin className="opacity-70" />
        </a>
        <a
          className="group w-full sm:w-auto text-center bg-gray-500 text-black px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-black border-opacity-40"
          href="https://drive.google.com/file/d/1LtI3msuJnwT1zBfS0JBk2ImYq08EMyU5/view?usp=sharing"
          target="_blank"
        >
          <span className="opacity-70">Resume</span>
          <SiReactiveresume className="opacity-70" />
        </a>
      </motion.div>
    </section>
  );
}
