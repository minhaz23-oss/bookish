import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-[40px] w-full bg-violet/[20%] border border-violet rounded-t-[10px] p-3 flex flex-col flex-center">
      <ul className="flex gap-[20px] sm:gap-[80px]">
        <Link href="/" className="links">
          Home
        </Link>
        <Link href="/products" className="links">
          Products
        </Link>
        <Link href="/blogs" className="links">
          Blogs
        </Link>
      </ul>
      <p className=" mt-3">contact us: minhazfardin25@gmail.com</p>
      <FaInstagram className=" mt-3 text-[25px]" />
    </footer>
  );
};

export default Footer;
