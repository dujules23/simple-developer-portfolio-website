"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import userData from "@constants/data";

export default function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
      <div className="flex  md:flex-row justify-between items-center">
        <div className="flex flex-col">
          <Link href="/">
            <h1 className="font-semibold text-xl dark:text-gray-100">
              {userData.name}
            </h1>
            <p className="text-base font-light text-gray-500 dark:text-gray-300">
              {userData.designation}
            </p>
          </Link>
        </div>

        <div className="space-x-8 hidden md:block">
          <Link
            href="/about"
            className={`text-base transform duration-500 hover:text-blue-1000 dark:hover:text-blue-1000 ${
              router.asPath === "/about"
                ? "text-gray-800 font-bold dark:text-gray-400 underline"
                : "text-gray-600 dark:text-gray-300 font-normal "
            }`}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`text-base transform duration-500 hover:text-blue-1000 dark:hover:text-blue-1000  ${
              router.asPath === "/projects"
                ? "text-gray-800 font-bold dark:text-gray-400 underline"
                : "text-gray-600 dark:text-gray-300 font-normal "
            }`}
          >
            Projects
          </Link>
          <Link
            href="/experience"
            className={`text-base transform duration-500 hover:text-blue-1000 dark:hover:text-blue-1000  ${
              router.asPath === "/experience"
                ? "text-gray-800 font-bold dark:text-gray-400 underline"
                : "text-gray-600 dark:text-gray-300 font-normal "
            }`}
          >
            Experience{" "}
          </Link>
          {/* <Link
            href="/contact"
            className={`text-base transform duration-500 hover:text-blue-1000 dark:hover:text-blue-1000 ${
              router.asPath === "/contact"
                ? "text-gray-800 font-bold dark:text-gray-400 underline"
                : "text-gray-600 dark:text-gray-300 font-normal "
            }`}
          >
            Contact
          </Link> */}
        </div>

        <div className="space-x-4 flex flex-row items-center">
          <a
            href={userData.socialLinks.instagram}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
              className="invert-0 dark:invert h-6 w-6"
            />
          </a>
          <a
            href={userData.socialLinks.twitter}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <img
              src="./twitter-bird.svg"
              className="invert-0 dark:invert h-6 w-6"
            />
          </a>
          <a
            href={userData.socialLinks.linkedin}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <img
              src="./linkedin-logo.svg"
              className="invert-0 dark:invert h-6 w-6"
            />
          </a>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-3 rounded focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="space-x-8 block md:hidden mt-4">
        <Link
          href="/about"
          className={`text-base font-normal text-gray-600 dark:text-gray-300 ${
            router.asPath === "/about" && "underline"
          }`}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={`text-base font-normal text-gray-600 dark:text-gray-300 ${
            router.asPath === "/projects" && "underline"
          }`}
        >
          Projects
        </Link>
        <Link
          href="/experience"
          className={`text-base font-normal text-gray-600 dark:text-gray-300 ${
            router.asPath === "/experience" && "underline"
          }`}
        >
          Experience
        </Link>
        {/* <Link
          href="/contact"
          className={`text-base font-normal text-gray-600 dark:text-gray-300 ${
            router.asPath === "/contact" && "underline"
          }`}
        >
          Contact
        </Link> */}
      </div>
    </div>
  );
}
