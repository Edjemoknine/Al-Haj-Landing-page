import { useState } from "react";
import logo from "/logo.png";
import { HiMenu, HiX } from "react-icons/hi";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-backg fixed top-0 z-40 w-full text-white py-4 ">
      <nav className="container mx-auto px-8 flex justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl flex  items-center  gap-4  font-bold ">
            <img src={logo} className="w-12 h-12" alt="" />
            <a href="/">Al-Haj</a>
          </h1>
        </div>
        <ul className="md:flex gap-8 hidden">
          <a href="#">Home</a>
          <a href="#">Haj</a>
          <a href="#">Omra</a>
          <a href="#">Packages</a>
          <a href="#">Tour</a>
          <a href="#">Blogs</a>
        </ul>
        <div className="px-6 py-2 rounded-full border hidden md:flex">
          <a href="">Contact Us</a>
        </div>
        {!open ? (
          <div className="md:hidden cursor-pointer">
            <HiMenu onClick={() => setOpen(!open)} />
          </div>
        ) : (
          <div className="md:hidden cursor-pointer">
            <HiX onClick={() => setOpen(!open)} />
          </div>
        )}
        {open ? (
          <ul className="flex flex-col gap-8 absolute w-full items-center p-6  bg-backg top-20 right-0 ">
            <a href="#">Home</a>
            <a href="#">Haj</a>
            <a href="#">Omra</a>
            <a href="#">Packages</a>
            <div className="px-6 py-2 rounded-full border ">
              <a href="">Contact Us</a>
            </div>
          </ul>
        ) : null}
      </nav>
    </header>
  );
};

export default Navbar;
