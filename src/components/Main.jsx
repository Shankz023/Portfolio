import React from "react";
import BackGround from "./../assets/background3.jpg";
import { TypeAnimation } from "react-type-animation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={BackGround}
      ></img>
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Hi! I'm Shankar Kumar Shaw
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                500,
                "Tech Enthusiast",
                500,
                "Happy Soul!",
                500,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className="cursor-pointer" size={20} />
            <a href="https://www.facebook.com/M.shankar.shaw">
              <FaFacebookF className="cursor-pointer" size={20} />
            </a>
            <a href="https://www.instagram.com/shankz.shankar_shaw">
              <FaInstagram className="cursor-pointer" size={20} />
            </a>
            <a href="https://in.linkedin.com/in/shankar-kumar-shaw-949167179?original_referer=https%3A%2F%2Fwww.google.com%2F">
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
