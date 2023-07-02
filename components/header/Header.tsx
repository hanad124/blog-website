"use client";

import Link from "next/link";
import "./header.scss";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import { HiBars3 } from "react-icons/hi2";
import { HiXMark } from "react-icons/hi2";

const Header = () => {
  return (
    // <div className={`header-wrapper`}>
    //   <header
    //     className={`flex justify-between navigation backdrop-blur-lg  ${
    //       scrollY ? "onscroll" : ""
    //     }`}
    //   >
    //     <div className="logo flex gap-2 items-center font-bold text-lg	">
    //       <div className="bg-slate-500 text-white rounded-md w-8 h-8 text-center flex justify-center items-center">
    //         F
    //       </div>
    //       <Link href={"/"}>Faruq Blog</Link>
    //     </div>
    //     <div className="navigation flex text-primarycolor gap-7">
    //       <p className="cursor-pointer">UI Design</p>
    //       <p className="cursor-pointer">Front-end</p>
    //       <p className="cursor-pointer">Back-end</p>
    //     </div>
    //     <div className="searchBar">
    //       <FiSearch className="search-icon" />
    //       <input type="text" placeholder="search" />
    //     </div>
    //   </header>
    // </div>

    <div className="header sticky top-0 left-0 w-full bg-[#4B5563]  z-10  mb-[8rem]">
      <Popover className="container mx-auto flex   items-center w-screen px-6 py-1 h-20">
        <div className="flex items-center gap-3">
          <div className="bg-slate-700 font-bold text-xl w-7 h-7 rounded-md flex justify-center items-center text-white">
            F
          </div>
          <h1 className="font-bold text-white text-lg">
            <Link href="/">Faruq Blog</Link>
          </h1>
        </div>
        <div className="grow ">
          <div className="hidden sm:flex items-center justify-center gap-2 md:gap-8 text-white">
            <Link href="ui-design">UI-design</Link>
            <Link href="front-end">Front-end</Link>
            <Link href="back-end">Back-end</Link>
            <Link href="about">About</Link>
            <Link href="contact">Contact</Link>
          </div>
        </div>

        <div className="flex grow items-center justify-end sm:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <HiBars3 className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>

        <Popover.Overlay className="fixed inset-0  backdrop-blur-lg " />

        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="rounded-lg bg-[#4B5563] shadow-lg ring-1 ring-black ring-opacity-5 divide-y-q divide-gray-50">
            <div className="px-5 pt-5 pb-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-slate-700 font-bold text-xl w-7 h-7 rounded-md flex justify-center items-center text-white">
                    F
                  </div>
                  <h1 className="font-bold text-white text-lg">
                    <Link href="/">Faruq Blog</Link>
                  </h1>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-[#4B5563] p-2 text-white hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <HiXMark className="h-6 w-6 " aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-6">
                  <Link
                    href="ui-design"
                    className=" focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                  >
                    UI-design
                  </Link>
                  <Link
                    href="front-end"
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                  >
                    Front-end
                  </Link>
                  <Link
                    href="back-end"
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                  >
                    Back-end
                  </Link>
                  <Link
                    href="about"
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                  >
                    About
                  </Link>
                  <Link
                    href="contact"
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                  >
                    Contact
                  </Link>
                </nav>
              </div>
              <div className="mt-6 flex flex-col items-center gap-2">
                <Link
                  href="register"
                  className="rounded-md text-center  bg-white px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                >
                  Sign up
                </Link>
                <Link
                  href="register"
                  className="rounded-md text-center bg-white px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>

        <div className="hidden sm:block text-white">
          <Link href="/register" className="mr-2 font-bold">
            Sign up
          </Link>
          <Link href="login" className="font-bold">
            Login
          </Link>
        </div>
      </Popover>
    </div>
  );
};

export default Header;
