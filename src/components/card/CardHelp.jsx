import React from "react";
import Button from "../Button";

const CardHelp = ({ cardTitle, cardImg, cardDescription }) => {
  return (
    <div className="p-2 text-left mb-10">
      <div className="flex rounded-lg border p-4 flex-col lg:min-w-[250px] xl:min-w-[333px] min-w-[250px] h-full">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full flex-shrink-0">
            <img src={cardImg} />
          </div>
          <h2 className="text-lg font-bold">{cardTitle}</h2>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <ul className="mb-3">
            {cardDescription.map((detail, index) => (
              <li
                key={index}
                className="p-1 text-[16px] font-medium text-[#686E76] hover:text-[#009EA9] cursor-pointer"
              >
                <a href={detail.link} target="_blank" rel="noopener noreferrer">
                  {detail.text}
                </a>
              </li>
            ))}
          </ul>
          <div className="">
            <Button text="Lihat Semua Artikel" variant="outline" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHelp;
