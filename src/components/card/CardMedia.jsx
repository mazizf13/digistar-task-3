import React from "react";
import { useDarkMode } from "../../contexts/DarkModeContext";

const CardMedia = ({ cardImg, cardTitle, cardDescription }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="md:mb-0 mb-6">
      <section className="flex relative w-full h-full">
        <a
          className={`space-y-6 appearance-none mr-5 flex flex-col w-full h-full ${isDarkMode ? "text-white" : ""}`}
          type="button"
          name="article-link"
          href="https://info.padiumkm.id/media/mengenal-jenis-tripod-dan-masing-masing-kelebihannya"
        >
          <figure
            className={`lg:flex lg:mx-auto w-full relative overflow-hidden rounded-lg lg:text-center self-center px-0 ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}
          >
            <img
              alt="3-rekomendasi-handphone-yang-bisa-anda-beli-dengan-spesifikasi-mumpuni"
              className="rounded-md"
              src={cardImg}
              sizes="100vw"
              data-nimg="fill"
            />
          </figure>
          <section className="space-y-2">
            <h3
              className={`min-h-14 text-xl font-bold line-clamp-2 ${isDarkMode ? "text-white" : ""}`}
            >
              {cardTitle}
            </h3>
            <article
              className={`text-gray-400 min-h-24 w-full text-justify ${isDarkMode ? "text-gray-300" : ""}`}
            >
              <div className="line-clamp-4">{cardDescription}</div>
            </article>
          </section>
        </a>
      </section>
    </div>
  );
};

export default CardMedia;
