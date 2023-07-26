"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Portfolio() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="projects" className="container mb-20 md:mb-32 md:my-32 mx-[5%] md:mx-[auto]">
      <div className="w-[11rem] md:w-[12rem] h-[2.8125rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] flex items-center gap-2 pl-3">
        <div>&#x1F517;</div>
        <span className="text-[0.875rem] md:text-[1rem] text-[#7B4AE2] font-bold">
          Selected Projects
        </span>
      </div>
      <div className="hidden md:flex flex-wrap gap-8 mt-10">
        <Link href="https://tic-tac-toe-five-teal.vercel.app/" target="blank">
          <div
            className="w-[22.5rem] h-[30rem] rounded-[1rem] border border-[rgba(123,74,226,0.50)] p-5"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <h4 className="text-[1.25rem] font-bold text-white cursor-pointer hover:text-[#7B4AE2]">
              Tic-Tac-Toe
            </h4>
            <p className="text-[0.875rem] font-normal text-[rgba(255,255,255,0.50)] mt-2">
              I implemented a tic-tac-toe game that allows users to play against
              the computer. The game keeps track of progress, including wins,
              losses, and ties, and can be refreshed at any time.
            </p>
            <div className="flex gap-3 mt-10">
              <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-3 text-[0.9rem] font-semibold text-[#7B4AE2] flex items-center">
                ReactJS
              </div>
              <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-3 text-[0.9rem] font-semibold text-[#7B4AE2] flex items-center">
                TypeScript
              </div>
              <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-3 text-[0.9rem] font-semibold text-[#7B4AE2] flex items-center">
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
              />
            </div>
          </div>
        </Link>
        <Link href="https://food-order-app-plut0r.netlify.app/" target="blank">
          <div
            className="w-[22.5rem] h-[30rem] rounded-[1rem] border border-[rgba(123,74,226,0.50)] p-5"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <h4 className="text-[1.25rem] font-bold text-white cursor-pointer hover:text-[#7B4AE2]">
              Plut0rMeals
            </h4>
            <p className="text-[0.875rem] font-normal text-[rgba(255,255,255,0.50)] mt-2">
              A simple food order app that allows users to add items to their
              cart from a pre-existing list of food options.They can also
              increase or decrese the quantity of each item, view their cart,
              and submit their information for checkout.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-3 text-[0.9rem] font-semibold text-[#7B4AE2] flex items-center">
                ReactJS
              </div>
              <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-3 text-[0.9rem] font-semibold text-[#7B4AE2] flex items-center">
                CSS Modules
              </div>
              <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-3 text-[0.9rem] font-semibold text-[#7B4AE2] flex items-center">
                Firebase
              </div>
              <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-3 text-[0.9rem] font-semibold text-[#7B4AE2] flex items-center">
                React Context
              </div>
            </div>
            <div className="rounded-[0.5rem] mt-4">
              <Image
                className="rounded-[0.5rem]"
                src="/Plutormeals.png"
                alt="project2_image"
                width={288}
                height={120}
              />
            </div>
          </div>
        </Link>
        <Link href="https://plut0r-music-player.netlify.app/" target="blank">
          <div
            className="w-[22.5rem] h-[30rem] rounded-[1rem] border border-[rgba(123,74,226,0.50)] p-5"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <h4 className="text-[1.25rem] font-bold text-white cursor-pointer hover:text-[#7B4AE2]">
              Music Player
            </h4>
            <p className="text-[0.875rem] font-normal text-[rgba(255,255,255,0.50)] mt-2">
              A music app that allows users to play any song from a local list,
              pause and skip to the next or previous track. Althogh the project
              is still a work in progress, I plan to make it more functional and
              improve page routing.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-3 text-[0.9rem] font-semibold text-[#7B4AE2] flex items-center">
                ReactJS
              </div>
              <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-3 text-[0.9rem] font-semibold text-[#7B4AE2] flex items-center">
                JavaScript
              </div>
              <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-3 text-[0.9rem] font-semibold text-[#7B4AE2] flex items-center">
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
        <Link href="https://first-admin-dashboard.netlify.app/" target="blank">
          <div
            className="w-[22.5rem] h-[30rem] rounded-[1rem] border border-[rgba(123,74,226,0.50)] p-5"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <h4 className="text-[1.25rem] font-bold text-white cursor-pointer hover:text-[#7B4AE2]">
              React Dashboard
            </h4>
            <p className="text-[0.875rem] font-normal text-[rgba(255,255,255,0.50)] mt-2">
              A React dashboard using Syncfusion and the JavaScript Mastery
              tutorial. The dashboard features six different theme colors, light
              and dark modes, four pages, six charts, and four apps.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-3 text-[0.9rem] font-semibold text-[#7B4AE2] flex items-center">
                ReactJS
              </div>
              <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-3 text-[0.9rem] font-semibold text-[#7B4AE2] flex items-center">
                JavaScript
              </div>
              <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-3 text-[0.9rem] font-semibold text-[#7B4AE2] flex items-center">
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
            className="w-[22.5rem] h-[30rem] rounded-[1rem] border border-[rgba(123,74,226,0.50)] p-5"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <h4 className="text-[1.25rem] font-bold text-white cursor-pointer hover:text-[#7B4AE2]">
              To-Do App
            </h4>
            <p className="text-[0.875rem] font-normal text-[rgba(255,255,255,0.50)] mt-2">
              The app allows users to input any task and then mark it as
              complete, delete it, or filter between all, active, and completed
              tasks. It also has a light and dark mode
            </p>
            <div className="flex flex-wrap gap-3 mt-10">
              <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-3 text-[0.9rem] font-semibold text-[#7B4AE2] flex items-center">
                HTML
              </div>
              <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-3 text-[0.9rem] font-semibold text-[#7B4AE2] flex items-center">
                CSS
              </div>
              <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-3 text-[0.9rem] font-semibold text-[#7B4AE2] flex items-center">
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
        <Link href="https://dictionary-app-plut0r.netlify.app/" target="blank">
          <div
            className="w-[22.5rem] h-[30rem] rounded-[1rem] border border-[rgba(123,74,226,0.50)] p-5"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <h4 className="text-[1.25rem] font-bold text-white cursor-pointer hover:text-[#7B4AE2]">
              Dictionary
            </h4>
            <p className="text-[0.875rem] font-normal text-[rgba(255,255,255,0.50)] mt-2">
              A dictionary app built using the DictionaryAPI. The app allows
              users to search for a word and get its meaning, synonyms,
              translation, and audio pronunciation. Users can also click on
              synonyms to get their meanings.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-3 text-[0.9rem] font-semibold text-[#7B4AE2] flex items-center">
                HTML
              </div>
              <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-3 text-[0.9rem] font-semibold text-[#7B4AE2] flex items-center">
                CSS
              </div>
              <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-3 text-[0.9rem] font-semibold text-[#7B4AE2] flex items-center">
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
            className="w-[22.5rem] h-[30rem] rounded-[1rem] border border-[rgba(123,74,226,0.50)] p-5"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <h4 className="text-[1.25rem] font-bold text-white cursor-pointer hover:text-[#7B4AE2]">
              FFO
            </h4>
            <p className="text-[0.875rem] font-normal text-[rgba(255,255,255,0.50)] mt-2">
              I built a demo food delivery service landing page using ReactJS,
              and I'm planning to convert it to a NextJS project. The landing
              page allows customers to easily browse through the available food
              subscriptions and food menu.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-3 text-[0.9rem] font-semibold text-[#7B4AE2] flex items-center">
                ReactJS
              </div>
              <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-3 text-[0.9rem] font-semibold text-[#7B4AE2] flex items-center">
                JavaScript
              </div>
              <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-3 text-[0.9rem] font-semibold text-[#7B4AE2] flex items-center">
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
        <Link href="https://expense-tracker-plut0r.netlify.app/" target="blank">
          <div
            className="w-[22.5rem] h-[30rem] rounded-[1rem] border border-[rgba(123,74,226,0.50)] p-5"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <h4 className="text-[1.25rem] font-bold text-white cursor-pointer hover:text-[#7B4AE2]">
              An Expense Tracker
            </h4>
            <p className="text-[0.875rem] font-normal text-[rgba(255,255,255,0.50)] mt-2">
              I built an expense tracker that enables users to create expenses,
              filter them by year, generate a chart based on monthly expenses,
              and delete an expense by clicking on it. Additionally, the expense
              gets stored using local storage.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-3 text-[0.9rem] font-semibold text-[#7B4AE2] flex items-center">
                ReactJS
              </div>
              <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-3 text-[0.9rem] font-semibold text-[#7B4AE2] flex items-center">
                JavaScript
              </div>
              <div className="h-[1.875rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] px-3 text-[0.9rem] font-semibold text-[#7B4AE2] flex items-center">
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
        </Link>
      </div>
      <div className="md:hidden w-full overflow-auto bar">
        <div className="flex gap-8 mt-10 w-fit bar">
          <Link href="https://tic-tac-toe-five-teal.vercel.app/" target="blank">
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
                and I'm planning to convert it to a NextJS project. The landing
                page allows customers to easily browse through the available
                food subscriptions and food menu.
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
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
