import React from "react";

const Alert = ({ message, type }) => {
  const alertStyles = {
    success: "text-green-700 font-bold bg-green-200",
    error: "text-red-700 font-bold bg-red-200",
  };

  return (
    <div
      className={`p-4 mb-4 text-sm ${alertStyles[type]} rounded-lg`}
      role="alert"
    >
      {message}
    </div>
  );
};

export default Alert;
