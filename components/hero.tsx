"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsTwitter } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="hero">
      <div
        className="container flex flex-col md:flex-row justify-center md:items-center md:justify-between mt-5 md:mt-14"
        data-aos="zoom-in-up"
        data-aos-duration="2000"
      >
        <div className="flex md:hidden gap-4 items-center justify-center">
          <Link href="https://www.linkedin.com/in/plut0r" target="blank">
            <div className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clip-path="url(#clip0_30_57)">
                  <path
                    d="M15.9999 0C24.837 0 32 7.164 32 16.0001C32 24.8361 24.837 32 15.9999 32C7.1629 32 0 24.836 0 16.0001C0 7.16411 7.16301 0 15.9999 0Z"
                    fill="white"
                    fill-opacity="0.5"
                  />
                  <path
                    d="M9.01599 21.984H12.012V11.998H9.01599V21.984ZM20.688 11.6521C19.234 11.6521 17.933 12.183 17.0101 13.3551V11.9651H14.0031V21.9841H17.0101V16.5661C17.0101 15.4211 18.0591 14.304 19.3731 14.304C20.687 14.304 21.0111 15.4211 21.0111 16.5381V21.9831H24.0071V16.3151C24.007 12.378 22.143 11.6521 20.688 11.6521ZM10.5 11C11.328 11 12 10.328 12 9.49997C12 8.67195 11.328 8.00003 10.5 8.00003C9.67199 8.00003 8.99995 8.67206 8.99995 9.50008C8.99995 10.3281 9.67199 11 10.5 11Z"
                    fill="#090E16"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_30_57">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </Link>
          <Link href="https://github.com/Plut0r" target="blank">
            <div className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="33"
                viewBox="0 0 34 33"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.7381 0.333344C7.67448 0.333344 0.333374 7.67445 0.333374 16.738C0.333374 23.9971 5.02922 30.1284 11.5501 32.302C12.3703 32.4455 12.6779 31.9534 12.6779 31.5228C12.6779 31.1332 12.6574 29.8413 12.6574 28.4674C8.53572 29.2261 7.46942 27.4626 7.14133 26.5399C6.95677 26.0682 6.15704 24.6123 5.45984 24.2227C4.88568 23.9151 4.06544 23.1564 5.43934 23.1359C6.73121 23.1154 7.65397 24.3252 7.96156 24.8174C9.43798 27.2986 11.7962 26.6014 12.7394 26.1707C12.883 25.1044 13.3136 24.3867 13.7852 23.9766C10.1352 23.5665 6.32109 22.1516 6.32109 15.8768C6.32109 14.0928 6.95677 12.6164 8.00257 11.468C7.83853 11.0579 7.26436 9.37644 8.16662 7.12079C8.16662 7.12079 9.54051 6.69017 12.6779 8.80227C13.9903 8.43316 15.3847 8.24861 16.7791 8.24861C18.1735 8.24861 19.5679 8.43316 20.8803 8.80227C24.0177 6.66966 25.3916 7.12079 25.3916 7.12079C26.2938 9.37644 25.7197 11.0579 25.5556 11.468C26.6014 12.6164 27.2371 14.0723 27.2371 15.8768C27.2371 22.1721 23.4025 23.5665 19.7524 23.9766C20.3471 24.4893 20.8598 25.4735 20.8598 27.0115C20.8598 29.2056 20.8393 30.9691 20.8393 31.5228C20.8393 31.9534 21.1468 32.4661 21.9671 32.302C28.4469 30.1284 33.1428 23.9766 33.1428 16.738C33.1428 7.67445 25.8017 0.333344 16.7381 0.333344Z"
                  fill="white"
                  fill-opacity="0.5"
                />
              </svg>
            </div>
          </Link>
          <Link href="https://twitter.com/Plut0r__" target="blank">
            <div className="cursor-pointer w-[2rem] h-[2rem] rounded-full bg-white/50 flex justify-center items-center">
              <BsTwitter size={23} color="#090E16" />
            </div>
          </Link>
        </div>
        <div className="flex md:hidden justify-center items-center">
          <Image
            src="/AvatarAndIcons.png"
            alt="avatar_icons"
            width={320}
            height={320}
          />
        </div>
        <div className="flex flex-col gap-2 mt-7 md:mt-0"> 
          <h1 className="text-[#7B4AE2] text-[0.875rem] md:text-[1.25rem] font-bold">
            &#x1F44B; Greetings!
          </h1>
          <h2 className="text-white text-[3rem] md:text-[3.2rem] lg:text-[3.25rem] font-extrabold">
            Zainab Ogunola
          </h2>
          <p className="text-[rgba(255,255,255,0.50)] text-[1.125rem] md:text-[1.25rem] font-normal">
            Front-end developer
          </p>
          <div className="hidden md:flex gap-4 items-center mt-3">
            <Link href="https://www.linkedin.com/in/plut0r" target="blank">
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <g clip-path="url(#clip0_30_57)">
                    <path
                      d="M15.9999 0C24.837 0 32 7.164 32 16.0001C32 24.8361 24.837 32 15.9999 32C7.1629 32 0 24.836 0 16.0001C0 7.16411 7.16301 0 15.9999 0Z"
                      fill="white"
                      fill-opacity="0.5"
                    />
                    <path
                      d="M9.01599 21.984H12.012V11.998H9.01599V21.984ZM20.688 11.6521C19.234 11.6521 17.933 12.183 17.0101 13.3551V11.9651H14.0031V21.9841H17.0101V16.5661C17.0101 15.4211 18.0591 14.304 19.3731 14.304C20.687 14.304 21.0111 15.4211 21.0111 16.5381V21.9831H24.0071V16.3151C24.007 12.378 22.143 11.6521 20.688 11.6521ZM10.5 11C11.328 11 12 10.328 12 9.49997C12 8.67195 11.328 8.00003 10.5 8.00003C9.67199 8.00003 8.99995 8.67206 8.99995 9.50008C8.99995 10.3281 9.67199 11 10.5 11Z"
                      fill="#090E16"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_30_57">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </Link>
            <Link href="https://github.com/Plut0r" target="blank">
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="33"
                  viewBox="0 0 34 33"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.7381 0.333344C7.67448 0.333344 0.333374 7.67445 0.333374 16.738C0.333374 23.9971 5.02922 30.1284 11.5501 32.302C12.3703 32.4455 12.6779 31.9534 12.6779 31.5228C12.6779 31.1332 12.6574 29.8413 12.6574 28.4674C8.53572 29.2261 7.46942 27.4626 7.14133 26.5399C6.95677 26.0682 6.15704 24.6123 5.45984 24.2227C4.88568 23.9151 4.06544 23.1564 5.43934 23.1359C6.73121 23.1154 7.65397 24.3252 7.96156 24.8174C9.43798 27.2986 11.7962 26.6014 12.7394 26.1707C12.883 25.1044 13.3136 24.3867 13.7852 23.9766C10.1352 23.5665 6.32109 22.1516 6.32109 15.8768C6.32109 14.0928 6.95677 12.6164 8.00257 11.468C7.83853 11.0579 7.26436 9.37644 8.16662 7.12079C8.16662 7.12079 9.54051 6.69017 12.6779 8.80227C13.9903 8.43316 15.3847 8.24861 16.7791 8.24861C18.1735 8.24861 19.5679 8.43316 20.8803 8.80227C24.0177 6.66966 25.3916 7.12079 25.3916 7.12079C26.2938 9.37644 25.7197 11.0579 25.5556 11.468C26.6014 12.6164 27.2371 14.0723 27.2371 15.8768C27.2371 22.1721 23.4025 23.5665 19.7524 23.9766C20.3471 24.4893 20.8598 25.4735 20.8598 27.0115C20.8598 29.2056 20.8393 30.9691 20.8393 31.5228C20.8393 31.9534 21.1468 32.4661 21.9671 32.302C28.4469 30.1284 33.1428 23.9766 33.1428 16.738C33.1428 7.67445 25.8017 0.333344 16.7381 0.333344Z"
                    fill="white"
                    fill-opacity="0.5"
                  />
                </svg>
              </div>
            </Link>
            <Link href="https://twitter.com/Plut0r__" target="blank">
              <div className="cursor-pointer w-[2rem] h-[2rem] rounded-full bg-white/50 flex justify-center items-center">
                <BsTwitter size={23} color="#090E16" />
              </div>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex">
          <Image
            src="/AvatarAndIcons.png"
            alt="avatar_icons"
            width={320}
            height={320}
          />
        </div>
        <div className="flex md:flex-col items-center gap-3 mt-3 md:mt-0">
          <Link href="/My Resume.pdf" target="blank">
            <div className="flex items-center gap-3 cursor-pointer">
              <p className="text-[1rem] text-[rgba(123,74,226,0.50)] font-semibold">
                Zainab&rsquo;s CV
              </p>
              <div>
                <Image
                  src="/ArrowLineDown.png"
                  alt="download_arrow"
                  width={16}
                  height={16}
                />
              </div>
            </div>
          </Link>
          <Link href="https://wa.me/+2348161634036" target="blank">
            <div className="w-[8rem] h-[2.75rem] rounded-[1rem] border border-[rgba(123,74,226,0.50)] flex items-center justify-center gap-3 cursor-pointer">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4.25626 16.5937C3.13959 14.7098 2.74899 12.483 3.1578 10.3314C3.5666 8.17982 4.74669 6.25145 6.47652 4.9083C8.20636 3.56516 10.367 2.8996 12.5527 3.03658C14.7385 3.17357 16.7991 4.10367 18.3477 5.65227C19.8963 7.20088 20.8264 9.26149 20.9634 11.4473C21.1004 13.633 20.4348 15.7937 19.0917 17.5235C17.7486 19.2533 15.8202 20.4334 13.6686 20.8422C11.5171 21.251 9.29025 20.8604 7.40626 19.7437V19.7437L4.29376 20.625C4.16624 20.6623 4.03103 20.6646 3.90231 20.6317C3.77359 20.5987 3.6561 20.5318 3.56215 20.4379C3.4682 20.3439 3.40126 20.2264 3.36833 20.0977C3.33541 19.969 3.33771 19.8338 3.37501 19.7062L4.25626 16.5937Z"
                    stroke="#7B4AE2"
                    stroke-opacity="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.2594 17.25C13.2726 17.2525 12.295 17.0599 11.3828 16.6834C10.4706 16.3069 9.64176 15.7539 8.94395 15.0561C8.24615 14.3583 7.69311 13.5295 7.3166 12.6173C6.9401 11.7051 6.74755 10.7275 6.75002 9.74062C6.7525 9.04605 7.03016 8.38078 7.52217 7.89052C8.01419 7.40027 8.68045 7.12499 9.37502 7.125V7.125C9.48962 7.12408 9.60234 7.15407 9.70133 7.21182C9.80032 7.26956 9.88191 7.35292 9.93752 7.45312L11.0344 9.36562C11.0996 9.48188 11.1331 9.61327 11.1315 9.74657C11.1298 9.87987 11.0931 10.0104 11.025 10.125L10.1438 11.5969C10.5952 12.601 11.399 13.4049 12.4031 13.8562L13.875 12.975C13.9896 12.9069 14.1202 12.8702 14.2535 12.8686C14.3868 12.8669 14.5181 12.9004 14.6344 12.9656L16.5469 14.0625C16.6471 14.1181 16.7305 14.1997 16.7882 14.2987C16.8459 14.3977 16.8759 14.5104 16.875 14.625C16.8726 15.3188 16.5965 15.9837 16.1068 16.4751C15.6171 16.9666 14.9532 17.2451 14.2594 17.25V17.25Z"
                    stroke="#7B4AE2"
                    stroke-opacity="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="text-[1rem] font-semibold text-[rgba(123,74,226,0.50)]">
                Let&rsquo;s talk
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full h-[0.0625rem] bg-[rgba(123,74,226,0.10)] mt-14 md:mt-32"></div>
    </div>
  );
}

export default Hero;
