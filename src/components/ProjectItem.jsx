import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectItem = ({ img, title, link, description }) => {
  return (
    <div className="flex flex-col justify-center ">
      <div className="group h-96 w-full [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <img
              src={img}
              alt="/"
              className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
            />
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h1 className="text-3xl">{title}</h1>
              <br />
              <p className="text-slate-300">{description}</p>
              <br />
              <a
                href={link}
                className="mt-2 inline-flex justify-center rounded-md bg-neutral-800/60 py-1 px-2 text-sm hover:bg-neutral-900"
              >
                <FaGithub className="mt-0.5 mr-1" />
                Github Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
