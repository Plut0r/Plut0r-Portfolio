"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface CARD {
  title: string;
  summary: string;
  date: string;
  color: boolean;
}

function Card({ title, summary, date, color }: CARD) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className={`w-[90%] md:w-[22.8rem] h-[12rem] md:h-[13.75rem] rounded-[1rem] ${
        color
          ? "bg-[rgba(123,74,226,0.10)]"
          : "border border-[rgba(123,74,226,0.50)]"
      } mt-10 p-3 flex flex-col justify-between`}
      data-aos="zoom-in-up"
      data-aos-duration="2000"
    >
      <div>
        <h4 className="font-semibold text-[0.875rem] md:text-[1rem]">{title}</h4>
        <p className="text-[rgba(255,255,255,0.50)] mt-2 text-[0.8rem] md:text-[0.9rem]">
          {summary}
        </p>
      </div>
      <div className="">
        <h4 className="text-[#7B4AE2] text-[0.875rem] md:text-[1rem]">{date}</h4>
      </div>
    </div>
  );
}

const experiences = [
  {
    id: 1,
    title: "Front-end Developer at Ebunoluwa's'",
    summary:
      "Development of features in the main application and website using React Js and Typescript, as well as the help of other technologies such as Next, Styled Components, and architectural patterns.",
    date: "December/2022 · Present",
    color: true,
  },
  {
    id: 2,
    title: "Front-end Intern at CapitalSage",
    summary:
      "Developed a food delivery dashboard using React js and TailwindCSS, collaborated with a fellow intern to implement the landing page using Astro, and redesigned a pre-existing sub-website.",
    date: "September/2022 - November/2022",
    color: false,
  },
  {
    id: 3,
    title: "Front-end Intern at Equilibrium Zone",
    summary:
      "Maintained current websites to ensure correct functionality and created a new design for Ezventures",
    date: "June/2022 - August/2022",
    color: false,
  },
];

function Career() {
  return (
    <div
      id="career"
      className="my-24 flex flex-col justify-center items-center"
    >
      <div className="w-[7rem] h-[2.25rem] bg-[rgba(123,74,226,0.10)] rounded-[1rem] flex items-center justify-center gap-1">
        💼
        <span className="text-[#7B4AE2] text-[0.875rem] md:text-[1rem] font-bold">Career</span>
      </div>
      <h4 className="font-bold text-[1.5rem] md:text-[2rem] mt-5">Trajectory until now</h4>
      <div className="mt-8 flex gap-20">
        <div className="">
          <h5 className="font-semibold text-[0.875rem] md:text-[1rem] text-center">
            Professional Field
          </h5>
          <p className="mt-3 text-[rgba(255,255,255,0.50)] text-[0.875rem] md:text-[1rem] text-center">
            2022 · Present
          </p>
          <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
            {experiences.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                summary={item.summary}
                date={item.date}
                color={item.color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
