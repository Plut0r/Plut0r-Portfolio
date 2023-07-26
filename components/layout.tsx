"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BsTwitter } from "react-icons/bs";
import Lotties from "./lottie";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const navLink = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About Me",
    path: "about-me",
  },
  {
    id: 3,
    name: "Skills",
    path: "skills",
  },
  {
    id: 4,
    name: "Projects",
    path: "projects",
  },
  {
    id: 5,
    name: "Career",
    path: "career",
  },
  {
    id: 6,
    name: "Contact",
    path: "contact",
  },
];

function Layout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Simulate a delay to show the loading animation
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Lotties />
      ) : (
        <div className="">
          <header className="container hidden md:flex mt-8 items-center justify-between bg-[rgba(123,74,226,0.05)] rounded-[1rem] px-5 h-[4rem]">
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="40"
                viewBox="0 0 37 40"
                fill="none"
              >
                <path
                  d="M0.834344 21.3482L5.01425 17.8543C5.98291 17.0448 7.40667 17.1958 8.19403 18.1913C8.98176 19.1872 8.83486 20.6509 7.8662 21.4604L5.84341 23.1512L20.5299 35.8732C21.4985 36.6827 21.6454 38.1464 20.8577 39.1419C20.4111 39.7071 19.7595 40 19.1028 40C18.6018 40 18.0971 39.8296 17.6783 39.4793L0.834344 24.9542C0.306723 24.513 0 23.8507 0 23.1512C0 22.4516 0.306723 21.7898 0.834344 21.3482Z"
                  fill="white"
                />
                <path
                  d="M19.3954 7.32817e-05C20.5953 0.00996334 21.5606 1.018 21.551 2.25197L21.3641 37.7835C21.3545 39.0175 20.3737 40.0095 19.1737 39.9996C18.8696 39.9974 18.581 39.9308 18.319 39.8129C17.5476 39.4648 17.0107 38.6694 17.0178 37.7478L17.205 2.21659C17.2146 0.982613 18.1951 -0.00981677 19.3954 7.32817e-05Z"
                  fill="white"
                />
                <path
                  d="M28.9344 24.4414L30.478 23.1512L24.9798 18.555C24.0111 17.7455 23.8646 16.2818 24.652 15.2863C25.4394 14.2901 26.8631 14.1394 27.8318 14.9489L35.4867 21.3481C36.0147 21.7898 36.3211 22.4516 36.3211 23.1512C36.3211 23.8507 36.0147 24.513 35.4867 24.9542L31.7863 28.0475C31.3671 28.3979 30.8628 28.5683 30.3618 28.5683C29.7047 28.5683 29.0531 28.2754 28.6066 27.7105C27.8192 26.7146 27.9661 25.2513 28.9344 24.4414Z"
                  fill="#7B4AE2"
                />
              </svg>
            </Link>
            <nav className="flex justify-center items-center gap-8">
              {navLink.map((link) => {
                const isActive = pathname?.startsWith(link.path);
                return (
                  <ScrollLink
                    key={link.id}
                    to={link.path}
                    smooth={true}
                    duration={500}
                    spy={true}
                    hashSpy={true}
                    offset={-50}
                  >
                    <a
                      className={`${
                        isActive
                          ? "text-[rgba(123,74,226,0.50)]"
                          : "text-[rgba(255,255,255,0.50)]"
                      } text-[1rem] font-normal cursor-pointer`}
                    >
                      {link.name}
                    </a>
                  </ScrollLink>
                );
              })}
            </nav>
          </header>
          {children}
          <footer className="w-full h-[5.5rem] bg-[rgba(123,74,226,0.10)] mt-12 flex justify-between items-center">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
              <div className="flex md:hidden gap-4 items-center mt-3">
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
              <p className="text-[rgba(255,255,255,0.50)] text-[0.8rem] md:text-[1rem]">
                Ogunola Zainab Ololade · 2023
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
          </footer>
        </div>
      )}
    </div>
  );
}

export default Layout;
