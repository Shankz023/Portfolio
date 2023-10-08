import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2021,
    role: "Intern",
    duration: "4 Months",
    details:
      "Worked as a Full Stack Java Developer and made a Hotel Management Application, made it using java, springboot framework ,angular & mysql following agile methodology",
    title: "Cognizant Technology Solutions",
  },
  {
    year: 2021,
    role: "Java Developer",
    duration: "9 Months",
    details:
      "In Application Development and Maintenance team doing bug fixes and helping in production support issues.",
    title: "Cognizant Technology Solutions",
  },
  {
    year: 2022,
    role: "Full Stack Developer",
    duraiton: "1.3 years",
    details:
      "Working as a Full Stack Developer, did bug-fixes and adding new feature to the existing application, worked with team in different timezones, helped in production support, written documentation about the application to help the production support team, , got awared as Ace Employee of the quarter, Learnt AWS and did cloudformation changes, Learnt Vite and migrated the React-App to Vite",
    title: "The Citco Group Limited",
  },
];

const Work = () => {
  return (
    <>
      <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
        {data.map((item, id) => (
          <WorkItem key={id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Work;
