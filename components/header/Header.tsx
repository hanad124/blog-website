import Link from "next/link";
import "./header.scss";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div className="mt-10">
      <header className="flex justify-between w-full sticky top-0 z-50 navigation">
        <div className="logo flex gap-2 items-center font-bold text-lg	">
          <div className="bg-slate-500 text-white rounded-md w-8 h-8 text-center flex justify-center items-center">
            F
          </div>
          <Link href={"/"}>Faruq Blog</Link>
        </div>
        <div className="navigation flex text-primarycolor gap-7">
          <p className="cursor-pointer">UI Design</p>
          <p className="cursor-pointer">Front-end</p>
          <p className="cursor-pointer">Back-end</p>
        </div>
        <div className="searchBar">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="search" />
        </div>
      </header>
    </div>
  );
};

export default Header;
