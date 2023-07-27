"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Summary() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="container flex items-center justify-center mt-16">
        <div className="w-[56.125rem] flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-between">
          <div
            className="w-[15.375rem] h-[12.5rem] rounded-[1rem] border border-[rgba(123,74,226,0.50)] flex flex-col items-center"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <Image
              className="mt-4"
              src="/CodeIcon.png"
              alt="experience_icon"
              width={72}
              height={64}
            />
            <p className="text-white text-[0.8rem] font-normal mt-4">
              More than 1 year
            </p>
            <h3 className="text-white text-[1.5rem] md:text-[2rem] font-bold">
              Experience
            </h3>
          </div>
          <div
            className="w-[15.375rem] h-[12.5rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] flex flex-col items-center"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <Image
              className="mt-4"
              src="/ProjectsIcon.png"
              alt="projects_icon"
              width={64}
              height={64}
            />
            <p className="text-white text-[0.8rem] font-normal mt-4">
              More than 25
            </p>
            <h3 className="text-white text-[1.5rem] md:text-[2rem] font-bold">
              Projects
            </h3>
          </div>
          <div
            className="w-[15.375rem] h-[12.5rem] rounded-[1rem] border border-[rgba(123,74,226,0.50)] flex flex-col items-center"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <Image
              className="mt-4"
              src="/DesignIcon.png"
              alt="accomplishments_icon"
              width={72}
              height={64}
            />
            <p className="text-white text-[0.8rem] font-normal mt-4">
              More than 10
            </p>
            <h3 className="text-white text-[1.5rem] md:text-[2rem] font-bold">
              Skills
            </h3>
          </div>
        </div>
      </div>
      <div className="hidden container w-[56.125rem] h-[6.875rem] bg-[rgba(123,74,226,0.10)] rounded-[1rem] mt-8 md:flex items-center justify-between px-8">
        <div>
          <p className="text-[0.8rem] text-[#7B4AE2] font-normal">
            Development
          </p>
          <h3 className="text-[1.3rem] text-[#7B4AE2] font-bold">Front-end</h3>
        </div>
        <div>
          <p className="text-[0.8rem] text-[#7B4AE2] font-normal">
            Most Used Skills
          </p>
          <h3 className="text-[1.3rem] text-[#7B4AE2] font-bold">
            React/TypeScript/TailwindCSS
          </h3>
        </div>
        <div>
          <p className="text-[0.8rem] text-[#7B4AE2] font-normal">
            Frequent Specialty
          </p>
          <h3 className="text-[1.3rem] text-[#7B4AE2] font-bold">Dashboards</h3>
        </div>
      </div>
      <div className="w-full h-[0.0625rem] bg-[rgba(123,74,226,0.10)] mt-16 mb-8"></div>
    </div>
  );
}

export default Summary;
