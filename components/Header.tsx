import Image from "next/image";
import React, { useEffect, useState } from "react";

import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import useAuth from "../hooks/useAuth";

type Props = {};

export default function Header({}: Props) {
  const [scroll, setScroll] = useState(false);
  const { logout, user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${scroll && "bg-[#0d0d0e]"}`}>
      {/* Left section */}
      <div className="flex items-center space-x-2 md:space-x-10 ">
        <img
          src="https://www.emudeck.com/img/hero.png"
          alt=""
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">My List</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">Community</li>
        </ul>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-4 text-sm  font-light">
        <SearchIcon className="h-6 w-6 sm:inline " />
        {/* <p className="hidden lg:inline">RAWG</p> */}
        <BellIcon className="h-6 w-6 sm:inline " />
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link href="/login">
            {/* <img
            src="https://icones.pro/wp-content/uploads/2022/05/icone-steam.png"
            alt=""
            className="cursor-pointer rounded"
            width={30}
            height={30}
          /> */}
            <button>Login</button>
          </Link>
        )}
      </div>
    </header>
  );
}
