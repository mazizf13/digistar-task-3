import React from "react";
import Layout from "../components/layout/Layout";
import CardHelp from "../components/card/CardHelp";
import { help } from "../data/item";
import { useDarkMode } from "../contexts/DarkModeContext";

const Help = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <Layout>
        <div
          className={`relative flex items-start w-full h-full md:h-[380px] lg:h-[472px] xl:h-[472px] overflow-hidden bg-[url('/help.png')] bg-cover bg-center bg-no-repeat ${isDarkMode ? "bg-gray-800" : ""}`}
        />
        <div
          className={`flex flex-row flex-wrap justify-between w-full ${isDarkMode ? "bg-gray-900" : ""}`}
        >
          <section
            className={`flex md:items-center items-start flex-col text-center w-full px-5 py-5 lg:px-40 lg:py-20 xl:px-40 xl:py-20 max-md:relative max-md:overflow-auto ${isDarkMode ? "text-gray-300" : "text-neutral-600"}`}
          >
            <div
              className={`text-center flex justify-center rounded-full border border-b-4 border-[#4DB3C5] w-[80px] mb-2 mx-auto`}
            />
            <h1
              className={`font-bold md:text-4xl text-xl p-2 ${isDarkMode ? "text-gray-200" : ""}`}
            >
              {help.title}
            </h1>
            <div className="mt-10">
              <div
                className={`md:grid grid-flow-row gap-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 flex ${isDarkMode ? "text-gray-400" : ""}`}
              >
                {help.articels.map((article, index) => (
                  <CardHelp
                    key={index}
                    cardTitle={article.title}
                    cardImg={article.img}
                    cardDescription={article.detail}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Help;
