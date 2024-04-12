"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const closeMenu = () => {
    setToggle(false);
  };
  return (
    <nav>
      <div className="flex items-center justify-between w-full h-[60px]">
        <Link href='/'>
          <Image src="/logo.png" width={120} height={60} alt="logo"/>
        </Link>
        <ul className="hidden md:flex gap-[80px]">
          <Link href="/" className="links" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/products" className="links" onClick={closeMenu}>
            Products
          </Link>
          <Link href="/#blogs"  onClick={closeMenu} legacyBehavior>
            <a className="links">Blogs</a>
          </Link>
        </ul>
        <div className=" md:hidden block cursor-pointer">
          <FaBars
            className="text-white text-[25px]"
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
      </div>
      {toggle && (
        <ul className=" flex flex-col justify-center gap-[10px] w-full h-[120px] border border-violet rounded-[10px] px-5">
          <Link href="/" className="links" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/products" className="links" onClick={closeMenu}>
            Products
          </Link>
          <Link href="/#blogs" onClick={closeMenu} legacyBehavior>
            <a className="links" >Blogs</a>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
