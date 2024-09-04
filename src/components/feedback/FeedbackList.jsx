import React from "react";
import { ThumbsUp, Trash } from "lucide-react";
import { useDarkMode } from "../../contexts/DarkModeContext";

const FeedbackList = ({ feedbacks, likeFeedback, deleteFeedback }) => {
  const { isDarkMode } = useDarkMode();
  const textColor = isDarkMode ? "text-gray-300" : "text-gray-700";

  return (
    <div
      className={`p-4 rounded shadow ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}
    >
      <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>List Saran</h2>
      <ul>
        {feedbacks.map((feedback, index) => (
          <li
            key={index}
            className={`mb-4 border-b pb-2 ${
              isDarkMode ? "border-gray-700" : "border-gray-300"
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className={`text-xl font-bold ${textColor}`}>
                  {feedback.name}
                </p>
                <p className={textColor}>{feedback.suggestion}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => likeFeedback(index)}
                  className={`bg-[#009EA9] hover:bg-[#2d9198] flex items-center space-x-2 text-white rounded-md p-2`}
                >
                  <ThumbsUp className="w-5 h-5" />
                  <span>
                    {feedback.likes}{" "}
                    {feedback.likes === 0 || feedback.likes === 1
                      ? "like"
                      : "likes"}
                  </span>
                </button>
                <button
                  onClick={() => deleteFeedback(index)}
                  className={`flex items-center space-x-2 text-white bg-red-500 hover:bg-red-600 rounded-md p-2`}
                >
                  <Trash className="w-5 h-5" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
