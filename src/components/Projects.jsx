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
        I have a diverse portfolio of projects that showcase my proficiency in
        various technology stacks. I have delved into the realm of machine
        learning by developing a predictive model for interview attendance.
        Additionally, I have ventured into mobile app development using Flutter
        to create a versatile, cross-platform application for online doctor
        booking, efficiently integrating Firebase for the backend. My skills
        extend to web development, as I crafted a hotel management application
        using Angular 8 and Java Spring Boot, employing MySQL for database
        management. Lastly, I ventured into library management with a web
        application built using React and Spring Boot, fortified by OAuth
        security, CORS handling, and comprehensive test coverage. For data
        management, I utilized PostgreSQL, and I ensured seamless schema
        migration using Liquibase. These experiences have honed my ability to
        tackle complex projects and leverage diverse technologies to create
        robust and innovative solutions.
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
