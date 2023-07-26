import Image from "next/image";
import React from "react";

function AboutMe() {
  return (
    <div id="about-me" className="container my-14 flex flex-col lg:flex-row items-center justify-center md:justify-start gap-10 md:gap-40">
      <div>
        <Image
          src="/about.png"
          alt="hero-ellipse"
          width={350}
          height={350}
          className="shrink-0"
        />
      </div>
      <div className="w-[90%] lg:w-[50%]">
        <div className="w-[8rem] md:w-[10rem] h-[2.8125rem] rounded-[1rem] bg-[rgba(123,74,226,0.10)] flex justify-center items-center text-[0.875rem] md:text-[1rem] font-bold text-[#7B4AE2]">
          🧐 About Me
        </div>
        <p className="mt-5">
          👋{" "}
          <span className="text-[0.875rem] md:text-[1.125rem] font-normal text-[rgba(255,255,255,0.50)]">
            My name is Ogunola Zainab Ololade, but you can just call me Plut0r.
            Nice to meet you!
          </span>
        </p>
        <p className="mt-2">
          👨‍💻{" "}
          <span className="text-[0.875rem] md:text-[1.125rem] font-normal text-[rgba(255,255,255,0.50)]">
            I have experience with developing and programming interfaces. I'm
            always looking for ways to improve my skills and stay up-to-date
            with the latest industry trends.
          </span>
        </p>
        <p className="mt-2">
          🎓{" "}
          <span className="text-[0.875rem] md:text-[1.125rem] font-normal text-[rgba(255,255,255,0.50)]">
            I'm currently in my final year at the University of Ibadan, studying
            Edu/Bio.
          </span>
        </p>
        <p className="mt-2">
          💻{" "}
          <span className="text-[0.875rem] md:text-[1.125rem] font-normal text-[rgba(255,255,255,0.50)]">
            Over the past few months, I've been focusing on improving my
            frontend development skills. I've completed a career path on
            Codecademy and taken courses on Udemy, FreeCodeCamp, Scrimba, and
            EducativeIo. It's been a lot of work, but I'm excited to see how
            much I've grown as a developer.
          </span>
        </p>
        <p className="mt-2">
          📚{" "}
          <span className="text-[0.875rem] md:text-[1.125rem] font-normal text-[rgba(255,255,255,0.50)]">
            I'm an avid reader and love learning about new programming languages
            and technologies.
          </span>
        </p>
        <p className="mt-2">
          👥{" "}
          <span className="text-[0.875rem] md:text-[1.125rem] font-normal text-[rgba(255,255,255,0.50)]">
            Lastly, I'm always looking to connect with other developers and
            learn from their experiences. If you're ever interested in grabbing
            a coffee and talking tech, let me know!
          </span>
        </p>
      </div>
    </div>
  );
}

export default AboutMe;