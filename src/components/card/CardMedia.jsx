import React from "react";
import { useDarkMode } from "../../contexts/DarkModeContext";

const CardMedia = ({ cardId, cardImg, cardTitle, cardDescription }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="md:mb-6 mb-4 p-4">
      <section className="flex relative w-full h-full">
        <a
          className={`space-y-4 appearance-none flex flex-col w-full h-full ${isDarkMode ? "text-white" : "text-gray-900"}`}
          href={`https://jsonplaceholder.typicode.com/posts/${cardId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure
            className={`w-full relative overflow-hidden rounded-lg self-center ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}
          >
            <img
              alt={cardTitle}
              className="rounded-md w-full object-cover"
              src={cardImg}
              sizes="100vw"
              data-nimg="fill"
            />
          </figure>
          <section className="space-y-2 mt-4">
            <h3
              className={`text-xl font-bold line-clamp-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}
            >
              {cardTitle}
            </h3>
            <article
              className={`min-h-24 w-full text-justify ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
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
