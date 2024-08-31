import React from "react";

const CardContact = ({ cardTitle, children }) => {
  return (
    <div className="border-[1px] border-[#DDF2E4] rounded-2xl p-8 h-full w-full min-h-[280px]">
      <h3 className="text-[22px] font-bold">{cardTitle}</h3>
      {children}
    </div>
  );
};

export default CardContact;
