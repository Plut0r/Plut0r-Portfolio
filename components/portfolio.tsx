"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsLink45Deg, BsGithub } from "react-icons/bs";

const portfolio = [
  {
    id: 1,
    name: "Audiophile e-commerce",
    description:
      "Users can browse their desired products and add them to their cart. However, please note that the project is still a work in progress. I'm currently working on designing the checkout page and improving the loading state.",
    skills: ["NextJs", "TypeScript", "TailwindCSS"],
    image: "/Audiophile.png",
    website_link: "https://audiophile-ecommerce-plut0r.vercel.app/",
    github_link: "https://github.com/Plut0r/audiophile_ecommerce",
  },
  {
    id: 2,
    name: "Planet Fact Site",
    description:
      "A Frontend Mentor Challenge, it's an interactive 8-page website with fun animations for each planet in our solar system",
    skills: ["NextJs", "TypeScript", "TailwindCSS"],
    image: "/planet.png",
    website_link: "https://planets-fun-site.vercel.app/",
    github_link: "https://github.com/Plut0r/planets-fun-site",
  },
  {
    id: 3,
    name: "Tic-Tac-Toe",
    description:
      "I implemented a tic-tac-toe game that allows users to play against the computer. The game keeps track of progress, including wins, losses, and ties, and can be refreshed at any time.",
    skills: ["ReactJS", "TypeScript", "TailwindCSS"],
    image: "/tic-tac-toe.png",
    website_link: "https://tic-tac-toe-five-teal.vercel.app/",
    github_link: "https://github.com/Plut0r/tic-tac-toe",
  },
  {
    id: 4,
    name: "Plut0rMeals",
    description:
      "It allows users to add items to their cart from a pre-existing list of food options, increase or decrese the quantity of each item, view their cart, and submit their information for checkout.",
    skills: ["ReactJS", "JavaScript", "Firebase"],
    image: "/Plutormeals.png",
    website_link: "https://food-order-app-plut0r.netlify.app/",
    github_link: "https://github.com/Plut0r/A-simple-Food-Order-app",
  },
  {
    id: 5,
    name: "Music Player",
    description:
      "It allows users to play any song from a local list, pause and skip to the next or previous track. I plan to make it more functional and improve page routing.",
    skills: ["ReactJS", "JavaScript", "TailwindCSS"],
    image: "/musicplayer.png",
    website_link: "https://plut0r-music-player.netlify.app/",
    github_link: "https://github.com/Plut0r/music_player",
  },
  {
    id: 6,
    name: "React Dashboard",
    description:
      "It was built using Syncfusion and the JavaScript Mastery tutorial. The dashboard features six different theme colors, light and dark modes, four pages and six charts.",
    skills: ["ReactJS", "JavaScript", "TailwindCSS"],
    image: "/dashboardb.png",
    website_link: "https://first-admin-dashboard.netlify.app/",
    github_link: "https://github.com/Plut0r/First-Admin-Dashboard-",
  },
  {
    id: 7,
    name: "To-Do App",
    description:
      "The app allows users to input any task and then mark it as complete, delete it, or filter between all, active, and completed tasks. It also has a light and dark mode",
    skills: ["HTML", "CSS", "JavaScript"],
    image: "/todoc.png",
    website_link: "https://todo-app-plut0r.netlify.app/",
    github_link: "https://github.com/Plut0r/todo-app",
  },
  {
    id: 8,
    name: "Dictionary App",
    description:
      "Built using the DictionaryAPI. The app allows users to search for a word and get its meaning, synonyms and audio pronunciation. Users can also click on synonyms to get their meanings.",
    skills: ["HTML", "CSS", "JavaScript"],
    image: "/dicti.png",
    website_link: "https://dictionary-app-plut0r.netlify.app/",
    github_link: "",
  },
  {
    id: 9,
    name: "An Expense Tracker",
    description:
      "I built an expense tracker that enables users to create expenses, filter them by year, generate a chart based on monthly expenses, and delete an expense by clicking on it",
    skills: ["ReactJS", "JavaScript", "TailwindCSS"],
    image: "/expense.png",
    website_link: "https://expense-tracker-plut0r.netlify.app/",
    github_link: "https://github.com/Plut0r/Expense-Tracker",
  },
];

function Portfolio() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id="projects"
      className="container mb-20 md:mb-32 md:my-32 mx-[5%] md:mx-[auto]"
    >
      <div className="w-[11rem] md:w-[12rem] h-[2.8125rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] flex items-center gap-2 pl-3">
        <div>&#x1F517;</div>
        <span className="text-[0.875rem] md:text-[1rem] text-[#7B4AE2] font-bold">
          Selected Projects
        </span>
      </div>
      <div
        className="hidden md:flex flex-wrap gap-8 md:gap-5 lg:gap-8 mt-10"
        data-aos="zoom-in-up"
        data-aos-duration="2000"
      >
        {portfolio.map((item) => (
          <div
            key={item.id}
            className="w-[22.5rem] h-[30rem] rounded-[1rem] border border-[rgba(123,74,226,0.50)] p-5"
          >
            <div className="flex justify-between items-center">
              <h4 className="text-[1.25rem] font-bold text-white cursor-pointer hover:text-[#7B4AE2]">
                {item.name}
              </h4>
              <div className="flex items-center gap-4">
                <Link href={item.website_link} target="blank">
                  <div className="w-5 h-5 rounded-full bg-[#7B4AE2] flex items-center justify-center">
                    <BsLink45Deg size={18} />
                  </div>
                </Link>
                <Link href={item.github_link} target="blank">
                  <div className="w-5 h-5 rounded-full bg-[#7B4AE2] flex items-center justify-center">
                    <BsGithub size={18} />
                  </div>
                </Link>
              </div>
            </div>
            <p className="text-[0.875rem] font-normal text-[rgba(255,255,255,0.50)] mt-2 h-[90px]">
              {item.description}
            </p>
            <div className="flex gap-3 mt-4">
              {item.skills.map((skill, index) => (
                <div
                  key={index}
                  className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-3 text-[0.9rem] font-semibold text-[#7B4AE2] flex items-center"
                >
                  {skill}
                </div>
              ))}
            </div>
            <div className="rounded-[0.5rem] mt-4 h-[230px] w-full">
              <Image
                className="rounded-[0.5rem] object-cover w-full h-full"
                src={item.image}
                alt="tic_tac_toe_image"
                width={288}
                height={120}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="md:hidden w-full overflow-auto bar">
        <div className="flex gap-8 mt-10 w-fit bar">
          {portfolio.map((item) => (
            <div
              key={item.id}
              className="w-[18rem] h-[25rem] rounded-[1rem] border border-[rgba(123,74,226,0.50)] p-3"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            >
              <div className="flex justify-between items-center">
                <h4 className="text-[1rem] font-bold text-white cursor-pointer hover:text-[#7B4AE2]">
                  {item.name}
                </h4>
                <div className="flex items-center gap-4">
                  <Link href={item.website_link} target="blank">
                    <div className="w-4 h-4 bg-[#7B4AE2] rounded-full">
                      <BsLink45Deg size={16} />
                    </div>
                  </Link>
                  <Link href={item.github_link} target="blank">
                    <div className="w-4 h-4 bg-[#7B4AE2] rounded-full">
                      <BsGithub size={16} />
                    </div>
                  </Link>
                </div>
              </div>
              <p className="text-[0.7rem] font-normal text-[rgba(255,255,255,0.50)] mt-2 h-[85px]">
                {item.description}
              </p>
              <div className="flex gap-3 mt-3">
                {item.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-2 text-[0.6rem] font-semibold text-[#7B4AE2] flex items-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
              <div className="rounded-[0.5rem] mt-4 h-[180px]">
                <Image
                  className="rounded-[0.5rem] object-cover w-full h-full"
                  src={item.image}
                  alt="tic_tac_toe_image"
                  width={288}
                  height={120}
                />
              </div>
            </div>
          ))}
          {/* <Link href="https://tic-tac-toe-five-teal.vercel.app/" target="blank">
            <div
              className="w-[18rem] h-[23rem] rounded-[1rem] border border-[rgba(123,74,226,0.50)] p-5"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            >
              <h4 className="text-[1rem] font-bold text-white cursor-pointer hover:text-[#7B4AE2]">
                Tic-Tac-Toe
              </h4>
              <p className="text-[0.7rem] font-normal text-[rgba(255,255,255,0.50)] mt-2">
                I implemented a tic-tac-toe game that allows users to play
                against the computer. The game keeps track of progress,
                including wins, losses, and ties, and can be refreshed at any
                time.
              </p>
              <div className="flex gap-3 mt-3">
                <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-2 text-[0.6rem] font-semibold text-[#7B4AE2] flex items-center">
                  ReactJS
                </div>
                <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-2 text-[0.6rem] font-semibold text-[#7B4AE2] flex items-center">
                  TypeScript
                </div>
                <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-2 text-[0.6rem] font-semibold text-[#7B4AE2] flex items-center">
                  TailwindCSS
                </div>
              </div>
              <div className="rounded-[0.5rem] mt-4">
                <Image
                  className="rounded-[0.5rem]"
                  src="/tic-tac-toe.png"
                  alt="tic_tac_toe_image"
                  width={288}
                  height={120}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </Link>
          <Link
            href="https://food-order-app-plut0r.netlify.app/"
            target="blank"
          >
            <div
              className="w-[18rem] h-[23rem] rounded-[1rem] border border-[rgba(123,74,226,0.50)] p-5 overflow-hidden"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            >
              <h4 className="text-[1rem] font-bold text-white cursor-pointer hover:text-[#7B4AE2]">
                Plut0rMeals
              </h4>
              <p className="text-[0.7rem] font-normal text-[rgba(255,255,255,0.50)] mt-2">
                A simple food order app that allows users to add items to their
                cart from a pre-existing list of food options.They can also
                increase or decrese the quantity of each item, view their cart,
                and submit their information for checkout.
              </p>
              <div className="flex flex-wrap gap-3 mt-3">
                <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-2 text-[0.6rem] font-semibold text-[#7B4AE2] flex items-center">
                  ReactJS
                </div>
                <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-2 text-[0.6rem] font-semibold text-[#7B4AE2] flex items-center">
                  CSS Modules
                </div>
                <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-2 text-[0.6rem] font-semibold text-[#7B4AE2] flex items-center">
                  Firebase
                </div>
                <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-2 text-[0.6rem] font-semibold text-[#7B4AE2] flex items-center">
                  React Context
                </div>
              </div>
              <div className="rounded-[0.5rem] mt-4">
                <Image
                  className="rounded-[0.5rem]"
                  src="/Plutormeals.png"
                  alt="project2_image"
                  width={288}
                  height={80}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </Link>
          <Link href="https://plut0r-music-player.netlify.app/" target="blank">
            <div
              className="w-[18rem] h-[23rem] rounded-[1rem] border border-[rgba(123,74,226,0.50)] p-5 overflow-hidden"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            >
              <h4 className="text-[1rem] font-bold text-white cursor-pointer hover:text-[#7B4AE2]">
                Music Player
              </h4>
              <p className="text-[0.7rem] font-normal text-[rgba(255,255,255,0.50)] mt-2">
                A music app that allows users to play any song from a local
                list, pause and skip to the next or previous track. Althogh the
                project is still a work in progress, I plan to make it more
                functional and improve page routing.
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-2 text-[0.6rem] font-semibold text-[#7B4AE2] flex items-center">
                  ReactJS
                </div>
                <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-2 text-[0.6rem] font-semibold text-[#7B4AE2] flex items-center">
                  JavaScript
                </div>
                <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-2 text-[0.6rem] font-semibold text-[#7B4AE2] flex items-center">
                  TailwindCSS
                </div>
              </div>
              <div className="rounded-[0.5rem] mt-4">
                <Image
                  className="rounded-[0.5rem]"
                  src="/musicplayer.png"
                  alt="project3_image"
                  width={288}
                  height={120}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </Link>
          <Link
            href="https://first-admin-dashboard.netlify.app/"
            target="blank"
          >
            <div
              className="w-[18rem] h-[23rem] rounded-[1rem] border border-[rgba(123,74,226,0.50)] p-5"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            >
              <h4 className="text-[1rem] font-bold text-white cursor-pointer hover:text-[#7B4AE2]">
                React Dashboard
              </h4>
              <p className="text-[0.7rem] font-normal text-[rgba(255,255,255,0.50)] mt-2">
                A React dashboard using Syncfusion and the JavaScript Mastery
                tutorial. The dashboard features six different theme colors,
                light and dark modes, four pages, six charts, and four apps.
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-2 text-[0.6rem] font-semibold text-[#7B4AE2] flex items-center">
                  ReactJS
                </div>
                <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-2 text-[0.6rem] font-semibold text-[#7B4AE2] flex items-center">
                  JavaScript
                </div>
                <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-2 text-[0.6rem] font-semibold text-[#7B4AE2] flex items-center">
                  TailwindCSS
                </div>
              </div>
              <div className="rounded-[0.5rem] mt-4">
                <Image
                  className="rounded-[0.5rem]"
                  src="/dashboardb.png"
                  alt="project4_image"
                  width={288}
                  height={100}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </Link>
          <Link href="https://todo-app-plut0r.netlify.app/" target="blank">
            <div
              className="w-[18rem] h-[23rem] rounded-[1rem] border border-[rgba(123,74,226,0.50)] p-5"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            >
              <h4 className="text-[1rem] font-bold text-white cursor-pointer hover:text-[#7B4AE2]">
                To-Do App
              </h4>
              <p className="text-[0.7rem] font-normal text-[rgba(255,255,255,0.50)] mt-2">
                The app allows users to input any task and then mark it as
                complete, delete it, or filter between all, active, and
                completed tasks. It also has a light and dark mode
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-2 text-[0.6rem] font-semibold text-[#7B4AE2] flex items-center">
                  HTML
                </div>
                <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-2 text-[0.6rem] font-semibold text-[#7B4AE2] flex items-center">
                  CSS
                </div>
                <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-2 text-[0.6rem] font-semibold text-[#7B4AE2] flex items-center">
                  JavaScript
                </div>
              </div>
              <div className="rounded-[0.5rem] mt-4">
                <Image
                  className="rounded-[0.5rem]"
                  src="/todoc.png"
                  alt="project5_image"
                  width={288}
                  height={100}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </Link>
          <Link
            href="https://dictionary-app-plut0r.netlify.app/"
            target="blank"
          >
            <div
              className="w-[18rem] h-[23rem] rounded-[1rem] border border-[rgba(123,74,226,0.50)] p-5 overflow-hidden"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            >
              <h4 className="text-[1rem] font-bold text-white cursor-pointer hover:text-[#7B4AE2]">
                Dictionary
              </h4>
              <p className="text-[0.7rem] font-normal text-[rgba(255,255,255,0.50)] mt-2">
                A dictionary app built using the DictionaryAPI. The app allows
                users to search for a word and get its meaning, synonyms,
                translation, and audio pronunciation. Users can also click on
                synonyms to get their meanings.
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-2 text-[0.6rem] font-semibold text-[#7B4AE2] flex items-center">
                  HTML
                </div>
                <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-2 text-[0.6rem] font-semibold text-[#7B4AE2] flex items-center">
                  CSS
                </div>
                <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-2 text-[0.6rem] font-semibold text-[#7B4AE2] flex items-center">
                  JavaScript
                </div>
              </div>
              <div className="rounded-[0.5rem] mt-4">
                <Image
                  className="rounded-[0.5rem]"
                  src="/dicti.png"
                  alt="project4_image"
                  width={288}
                  height={100}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </Link>
          <Link href="https://project-ffo.netlify.app/" target="blank">
            <div
              className="w-[18rem] h-[23rem] rounded-[1rem] border border-[rgba(123,74,226,0.50)] p-5"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            >
              <h4 className="text-[1rem] font-bold text-white cursor-pointer hover:text-[#7B4AE2]">
                FFO
              </h4>
              <p className="text-[0.7rem] font-normal text-[rgba(255,255,255,0.50)] mt-2">
                I built a demo food delivery service landing page using ReactJS,
                and I&rsquo;m planning to convert it to a NextJS project. The
                landing page allows customers to easily browse through the
                available food subscriptions and food menu.
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-2 text-[0.6rem] font-semibold text-[#7B4AE2] flex items-center">
                  ReactJS
                </div>
                <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-2 text-[0.6rem] font-semibold text-[#7B4AE2] flex items-center">
                  JavaScript
                </div>
                <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-2 text-[0.6rem] font-semibold text-[#7B4AE2] flex items-center">
                  TailwindCSS
                </div>
              </div>
              <div className="mt-4">
                <Image
                  className="rounded-[0.5rem]"
                  src="/ffob.png"
                  alt="project4_image"
                  width={288}
                  height={100}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </Link>
          <Link
            href="https://expense-tracker-plut0r.netlify.app/"
            target="blank"
          >
            <div
              className="w-[18rem] h-[23rem] rounded-[1rem] border border-[rgba(123,74,226,0.50)] p-5"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            >
              <h4 className="text-[1rem] font-bold text-white cursor-pointer hover:text-[#7B4AE2]">
                An Expense Tracker
              </h4>
              <p className="text-[0.7rem] font-normal text-[rgba(255,255,255,0.50)] mt-2">
                I built an expense tracker that enables users to create
                expenses, filter them by year, generate a chart based on monthly
                expenses, and delete an expense by clicking on it. Additionally,
                the expense gets stored using local storage.
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-2 text-[0.6rem] font-semibold text-[#7B4AE2] flex items-center">
                  ReactJS
                </div>
                <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-2 text-[0.6rem] font-semibold text-[#7B4AE2] flex items-center">
                  JavaScript
                </div>
                <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-2 text-[0.6rem] font-semibold text-[#7B4AE2] flex items-center">
                  TailwindCSS
                </div>
              </div>
              <div className="mt-4">
                <Image
                  className="rounded-[0.5rem]"
                  src="/expense.png"
                  alt="project4_image"
                  width={288}
                  height={100}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
