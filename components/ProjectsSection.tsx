import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "ChatGpt4 OpenAi Key",
    description:
      "Elevate ad creation using ChatGPT's openApiKey. Craft engaging Facebook, Instagram, and more ads effortlessly. Choose prompts, collaborate with AI, and refine content easily. Revolutionize content creation today with ChatGPT4's AI-powered efficiency and creativity. ",
    image: "/ChatGpt4Fertig.png",
    github: "https://github.com/EnesSneaker/ChatGpt4",
    link: "",
  },
  {
    name: "Frontend Website",
    description:
      "I crafted a website to showcase my uncle's premier lawn care company. Explore our dedication to cultivating vibrant landscapes. From design to digital, this platform mirrors our commitment to quality. Your ideal lawn, just a click away.",
    image: "/HuskoWebFertig.png",
    github: "https://github.com/EnesSneaker/lawn_care-Husk",
    link: "https://lawn-care-husk.vercel.app/",
  },
  {
    name: "Foodies",
    description:
      "A Social Media Haven for Cooks. Unleash your inner chef on our platform, where culinary enthusiasts unite. Seamlessly log in, share your unique recipes, and join a community passionate about flavors. From amateurs to seasoned pros, everyone has a seat at our virtual table. Let's savor creativity, together.",
    image: "/Foodies_Portfolio.png",
    github: "https://github.com/EnesSneaker/Foodies",
    link: "",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
