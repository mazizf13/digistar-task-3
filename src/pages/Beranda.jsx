import React from "react";
import Layout from "../components/layout/Layout";
import { beranda } from "../data/item";
import Button from "../components/Button";
import { useDarkMode } from "../contexts/DarkModeContext";

const Beranda = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <Layout>
        <div className="flex flex-col md:mx-auto">
          <section
            className={`relative flex items-start w-full h-full md:h-[380px] lg:h-[472px] xl:h-[472px] overflow-hidden bg-gradient-to-r ${isDarkMode ? "from-[#1A1A1A] to-[#314b59]" : "from-[#D6FCFF] to-[#29BBD4]"}`}
          >
            <div className="h-full w-full gap-6 flex flex-col lg:flex-row xl:flex-row items-center justify-center mx-10 my-10 lg:my-0 xl:my-0 lg:mx-40 xl:mx-40">
              <div
                className={`w-full flex flex-col justify-start items-start ${isDarkMode ? "text-[#E0E0E0]" : "text-[#002022]"}`}
              >
                <div className="mb-4">
                  <h1
                    className={`font-bold text-xl md:text-[28px] lg:text-[28px] xl:text-[28px] lg:leading-[42px] ${isDarkMode ? "text-[#E0E0E0]" : "text-[#002022]"}`}
                  >
                    {beranda.title}
                  </h1>
                  <p
                    className={`text-wrap text-sm md:text-sm lg:text-sm xl:text-sm pb-2 pt-4 ${isDarkMode ? "text-[#B0B0B0]" : "text-[#444B55]"}`}
                  >
                    {beranda.description}
                  </p>
                </div>
                <div>
                  <Button text="Selengkapnya" variant="primary" />
                </div>
              </div>

              <div className="flex justify-center items-center rounded-[15px] lg:rounded-[30px] xl:rounded-[30px] overflow-hidden w-full lg:w-[70%] xl:w-[70%] ">
                <img
                  src="https://info.padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.c32bfb9e.jpg&w=3840&q=75"
                  alt="Hero"
                />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Beranda;
