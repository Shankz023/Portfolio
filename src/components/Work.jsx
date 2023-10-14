import React, { useEffect, useState } from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2022,
    role: "Full Stack Developer",
    duration: "1.3 years - Current",
    details:
      "Working as a Full Stack Developer, did bug-fixes and adding new feature to the existing application, worked with team in different timezones, helped in production support, written documentation about the application to help the production support team, got awared as Ace Employee of the quarter, Learnt AWS and did cloudformation changes, Learnt Vite and migrated the React-App to Vite.",
    title: "The Citco Group Limited",
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
    year: 2021,
    role: "Intern",
    duration: "4 Months",
    details:
      "Worked as a Full Stack Java Developer and made a Hotel Management Application, made it using Java, Springboot framework, angular & MySql following Agile methodology.",
    title: "Cognizant Technology Solutions",
  },
];

const Work = () => {
  const [activeItem, setActiveItem] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const items = document.querySelectorAll(".workItem");

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2;

        if (Math.abs(itemCenter - scrollPosition) <= window.innerHeight / 2) {
          setActiveItem(item);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
        {data.map((item, id) => (
          <WorkItem
            key={id}
            item={item}
            activeItem={activeItem}
            className="workItem"
          />
        ))}
      </div>
    </>
  );
};

export default Work;
