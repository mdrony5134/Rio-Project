import React from "react";
import { AiOutlineMessage } from "react-icons/ai";

const Service = () => {
  const services = [
    {
      heading: "Customer Support Chatbots",
      title:
        "Streamline operations and enhance productivity with AI-driven automation.",
      button: "Learn More",
    },
    {
      heading: "Workflow Automations",
      title:
        "Cut down on manual labor costs through efficient and precise automated processes.",
      button: "Learn More",
    },
    {
      heading: "Chatbots for Internal Use",
      title:
        "Streamline operations and enhance productivity with AI-driven automation.",
      button: "Learn More",
    },
    {
      heading: "Custom GPTs",
      title:
        "Harness the power of AI for in-depth analytics and informed decision-making.",
      button: "Learn More",
    },
  ];

  return (
    <div className="py-24">
      <div className="text-center">
        <p className="bg-white inline-block text-center px-4 text-lg font-bold py-2 rounded-lg shadow-md text-blue-500 mb-4">Service</p>
      </div>
      <div>
        <h1 className="text-5xl text-center font-extrabold">
          <span className="text-blue-600">AI-powered</span> automation <br />{" "}
          services
        </h1>
      </div>
      <div className="grid grid-cols-2 justify-center mt-10 max-w-7xl mx-auto gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-4 max-w-2xl bg-white shadow-lg rounded-md text-black"
          >
            <div className="flex rounded-lg h-full p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="mr-3">
                  <AiOutlineMessage className="w-10 h-10 text-blue-500" />
                  <h2 className="text-2xl my-5 font-bold">{service.heading}</h2>
                </div>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed text-base text-gray-500">
                  {service.title}
                </p>
                <a
                  href="#"
                  className="mt-3 text-blue-600 hover:text-blue-600 inline-flex items-center"
                >
                  {service.button}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
