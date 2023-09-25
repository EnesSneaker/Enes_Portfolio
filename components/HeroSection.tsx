"use client"; // this is a client component
import React from "react";
import Image from "next/image";
//import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-5 md:my-1 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.jpeg"
            alt=" "
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Enes!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Junior Developer{" "}
            </span>
            based in Vienna. Working towards creating software that makes life
            easier and more meaningful.
          </p>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer"
          >
            Projects
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center cursor-pointer">
        <button
          onClick={() => scrollToSection("about")}
          className="text-neutral-100 font-semibold bg-transparent border border-neutral-100 px-4 py-2 rounded-full hover:bg-teal-600 hover:text-white"
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
