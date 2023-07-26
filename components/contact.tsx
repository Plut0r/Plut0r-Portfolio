"use client";

import React from "react";
import Link from "next/link";
import {
  Link as ScrollLink,
  animateScroll,
  animateScroll as scroll,
} from "react-scroll";

function Contact() {
  function handleCopyEmail() {
    navigator.clipboard.writeText("ogunolaololade@gmail.com");
  }

  return (
    <div
      id="contact"
      className="my-16 flex flex-col justify-center items-center"
    >
      <div className="w-[7rem] h-[2.25rem] bg-[rgba(123,74,226,0.10)] rounded-[1rem] flex items-center justify-center gap-1">
      &#x1F4EC; <span className="text-[#7B4AE2] text-[0.875rem] md:text-[1rem] font-bold">Contact</span>
      </div>
      <h4 className="font-bold text-[1.8rem] md:text-[2.3rem] mt-5">Let's Talk!</h4>
      <div className="mt-6 flex flex-col md:flex-row items-center gap-10 md:gap-20">
        <Link href="https://wa.me/+2348161634036" target="blank">
          <div className="w-[8.2rem] h-[2.75rem] rounded-[1rem] border border-[rgba(123,74,226,0.50)] flex items-center justify-center gap-3 cursor-pointer">
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
              WhatsApp
            </p>
          </div>
        </Link>
        <div className="flex flex-col items-center justify-center gap-1 text-center">
          <Link href="mailto:ogunolaololade@gmail.com" target="blank">
            <div className="cursor-pointer mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M32.8594 5.60823L3.73437 13.8114C3.48644 13.8791 3.26544 14.0217 3.10146 14.2196C2.93748 14.4175 2.8385 14.6612 2.81801 14.9174C2.79751 15.1736 2.85649 15.4299 2.98692 15.6514C3.11734 15.8729 3.31287 16.0488 3.54687 16.1551L16.9219 22.4832C17.1839 22.6046 17.3943 22.815 17.5156 23.077L23.8437 36.452C23.9501 36.686 24.126 36.8815 24.3474 37.0119C24.5689 37.1424 24.8252 37.2013 25.0814 37.1808C25.3376 37.1603 25.5813 37.0614 25.7792 36.8974C25.9771 36.7334 26.1197 36.5124 26.1875 36.2645L34.3906 7.13948C34.4528 6.92694 34.4566 6.7016 34.4017 6.48707C34.3469 6.27253 34.2353 6.07671 34.0787 5.92013C33.9221 5.76355 33.7263 5.65198 33.5118 5.5971C33.2973 5.54222 33.0719 5.54607 32.8594 5.60823V5.60823Z"
                  stroke="#7B4AE2"
                  stroke-opacity="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.3281 22.6709L24.3906 15.6084"
                  stroke="#7B4AE2"
                  stroke-opacity="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </Link>
          <h4 className="text-[#7B4AE2]">E-mail:</h4>
          <p className="text-[rgba(255,255,255,0.50)]">
            ogunolaololade@gmail.com
          </p>
          <div className="cursor-pointer mt-2" onClick={handleCopyEmail}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M27 22.999V4.99902H9"
                stroke="#7B4AE2"
                stroke-opacity="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23 8.99902H5V26.999H23V8.99902Z"
                stroke="#7B4AE2"
                stroke-opacity="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className="flex items-center gap-2 mt-14 cursor-pointer"
        onClick={() => animateScroll.scrollToTop()}
      >
        <p className="text-[rgba(123,74,226,0.50)] text-[1.2rem] font-semibold">
          Back to top
        </p>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M16 26.999V4.99902"
              stroke="#7B4AE2"
              stroke-opacity="0.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 13.999L16 4.99902L25 13.999"
              stroke="#7B4AE2"
              stroke-opacity="0.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Contact;
