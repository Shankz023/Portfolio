import React from "react";

const WorkItem = (props) => {
  const { id, item, activeItem } = props;
  const { year, role, duration, details, title } = item;
  return (
    <div className={props.className}>
      <ol className="md:ml-20 flex flex-col md:flex-row relative border-l border-stone-200">
        <li className="mb-10 ml-4">
          <div
            className={`absolute w-3 h-3 ${
              activeItem ? "bg-stone-800" : "bg-stone-200"
            } rounded-full mt-1.5 -left-1.5 border-white`}
          ></div>
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
              {year}
            </span>
            <span className="text-lg font-semibold text-[#001b5e]">
              {title}
            </span>
            <span className="my-1 text-sm font-normal leading-none text-stone-400">
              {duration}
            </span>
          </p>
          <p className="my-1">
            <span className="font-semibold text-gray-500">{role}</span>
          </p>
          <p className="my-2 text-base font-normal text-stone-500">{details}</p>
        </li>
      </ol>
    </div>
  );
};

export default WorkItem;
