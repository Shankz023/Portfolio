import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineProject,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import resumePDF from "./../assets/ShankarsResume09072023.pdf";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const downloadResume = () => {
    if (nav) {
      handleNav();
    }
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Shankar'sResume.pdf"; // Set the desired download filename
    link.click();
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div>
          <div className="md:hidden fixed w-full h-screen bg-white/70 flex flex-col justify-center items-center z-20">
            <a
              onClick={handleNav}
              href="#main"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineHome size={20} />
              <span className="pl-4">Home</span>
            </a>
            <a
              onClick={handleNav}
              href="#work"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <GrProjects size={20} />
              <span className="pl-4">Work</span>
            </a>
            <a
              onClick={handleNav}
              href="#projects"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineProject size={20} />
              <span className="pl-4">Projects</span>
            </a>
            <a
              onClick={downloadResume}
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <BsPerson size={20} />
              <span className="pl-4">Resume</span>
            </a>
            <a
              onClick={handleNav}
              href="#contact"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineMail size={20} />
              <span className="pl-4">Contact</span>
            </a>
          </div>
        </div>
      ) : (
        <>
          <div className="md:block hidden fixed top-[25%] z-10">
            <div className="flex flex-col">
              <a
                href="#main"
                class="relative rounded-full shadow-lg inline-flex items-center m-2  justify-center p-8 px-6 py-3 overflow-hidden font-medium hover:ease-in hover:scale-110 transition duration-300 ease-out bg-gray-300 shadow-gray-500 group"
              >
                <span class="absolute  inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-10 bg-gray-300 group-hover:translate-x-0 ease">
                  <AiOutlineHome size={20}></AiOutlineHome>
                </span>
                <span class="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
                  Home
                </span>
                <span class="relative invisible">Home</span>
              </a>
              <a
                href="#work"
                class="relative rounded-full shadow-lg inline-flex items-center m-2  justify-center p-4 px-6 py-3 overflow-hidden font-medium hover:ease-in hover:scale-110 transition duration-300 ease-out bg-gray-300 shadow-gray-500 group"
              >
                <span class="absolute  inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-10 bg-gray-300 group-hover:translate-x-0 ease">
                  <GrProjects size={20} />
                </span>
                <span class="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
                  Work
                </span>
                <span class="relative invisible">Work</span>
              </a>
              <a
                href="#projects"
                class="relative rounded-full shadow-lg inline-flex items-center m-2  justify-center p-4 px-6 py-3 overflow-hidden font-medium hover:ease-in hover:scale-110 transition duration-300 ease-out bg-gray-300 shadow-gray-500 group"
              >
                <span class="absolute  inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-10 bg-gray-300 group-hover:translate-x-0 ease">
                  <AiOutlineProject size={20} />
                </span>
                <span class="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
                  Projects
                </span>
                <span class="relative invisible">Projects</span>
              </a>
              <a
                onClick={downloadResume}
                class=" cursor-pointer relative rounded-full shadow-lg inline-flex items-center m-2  justify-center p-4 px-6 py-3 overflow-hidden font-medium hover:ease-in hover:scale-110 transition duration-300 ease-out bg-gray-300 shadow-gray-500 group"
              >
                <span class="absolute  inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-10 bg-gray-300 group-hover:translate-x-0 ease">
                  <BsPerson size={20} />
                </span>
                <span class="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
                  Resume
                </span>
                <span class="relative invisible">Resume</span>
              </a>
              <a
                href="#contact"
                class="relative rounded-full shadow-lg inline-flex items-center m-2  justify-center p-4 px-6 py-3 overflow-hidden font-medium hover:ease-in hover:scale-110 transition duration-300 ease-out bg-gray-300 shadow-gray-500 group"
              >
                <span class="absolute  inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-10 bg-gray-300 group-hover:translate-x-0 ease">
                  <AiOutlineMail size={20}></AiOutlineMail>
                </span>
                <span class="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
                  Contact
                </span>
                <span class="relative  ml-4 invisible">Contact</span>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidenav;
