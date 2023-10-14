import React from "react";
import machineLearning from "./../assets/news.jpg";
import hotel from "./../assets/hotel.jpg";
import flutter from "./../assets/flutter.jpg";
import library from "./../assets/library.jpg";
import ProjectItem from "./ProjectItem";

const projectDescription = [
  "This is News web app made using Angular, Html, Css",
  "This is made by Springboot, Angular 8, Html, Css, Hibernate, MySql",
  "Cross Platform Mobile Application made using Flutter and Firebase as backend",
  "This is made using Springboot, Swagger, Psql, Test Containers, JUnit, Liquibase",
];

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
        I have a truly diverse portfolio of projects that powerfully highlight
        my prowess in various technology stacks. One of my paramount areas of
        expertise lies in Spring Boot development. While I have ventured into
        the realm of Angular by developing a cutting-edge News Application, my
        skills extend far beyond the frontend. For instance, I expertly crafted
        a hotel management application utilizing Angular 8 in tandem with Java
        Spring Boot, seamlessly integrating MySQL for robust database
        management. Furthermore, I delved into library management with a dynamic
        web application that combines React and Spring Boot, reinforced with
        top-notch OAuth security, meticulous CORS handling, and a comprehensive
        test suite. When it comes to data management, I harnessed the power of
        PostgreSQL and orchestrated seamless schema migration using Liquibase.
        These experiences have honed my ability to tackle the most complex
        projects, showcasing my versatility in leveraging diverse technologies
        to create exceptionally robust and innovative solutions, with Spring
        Boot development being a standout pillar of my skill set.
      </p>
      <div className="grid lg:grid-cols-2 gap-12">
        <ProjectItem
          img={machineLearning}
          title="News Application"
          link={"https://github.com/Shankz023/NewsAngularApp/tree/master"}
          description={projectDescription[0]}
        />
        <ProjectItem
          img={hotel}
          title="Hotel Management Application"
          link={
            "https://github.com/Shankz023/Angular_HotelManagementProject/tree/master"
          }
          description={projectDescription[1]}
        />
        <ProjectItem
          img={flutter}
          title="Doctor Booking Application"
          link={"https://github.com/Shankz023/Online-Clinic-App"}
          description={projectDescription[2]}
        />
        <ProjectItem
          img={library}
          title="Library Management Application"
          link={"https://github.com/Shankz023/library-app"}
          description={projectDescription[3]}
        />
      </div>
    </div>
  );
};

export default Projects;
