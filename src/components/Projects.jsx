import React from "react";
import machineLearning from "./../assets/ml6.jpg";
import hotel from "./../assets/hotel.jpg";
import flutter from "./../assets/flutter.jpg";
import library from "./../assets/library.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div
      id="projects"
      className="max-w-[1040px] m-auto items-center md:pl-40 p-4 py-16"
    >
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={machineLearning} title="Attendance Prediction" />
        <ProjectItem img={hotel} title="Hotel Management" />
        <ProjectItem img={flutter} title="Doctor Booking" />
        <ProjectItem img={library} title="Library Management" />
      </div>
    </div>
  );
};

export default Projects;
