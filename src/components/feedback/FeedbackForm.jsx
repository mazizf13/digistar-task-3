import React, { useState, useEffect } from "react";
import { useDarkMode } from "../../contexts/DarkModeContext";
import Alert from "../Alert";

const FeedbackForm = ({ addFeedback, setFeedbacks }) => {
  const { isDarkMode } = useDarkMode();
  const [name, setName] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const storedFeedbacks = JSON.parse(localStorage.getItem("feedbacks"));
    if (storedFeedbacks) {
      setFeedbacks(storedFeedbacks);
    }
  }, [setFeedbacks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !suggestion) {
      setAlertMessage("Nama dan Saran tidak boleh kosong!");
    } else {
      addFeedback({ name, suggestion, likes: 0 });
      setName("");
      setSuggestion("");
      setAlertMessage("");
    }
  };

  const inputClass = isDarkMode
    ? "bg-gray-700 border-gray-600 text-gray-300"
    : "bg-white border-gray-300";

  return (
    <div>
      <h2
        className={`text-[48px] font-bold mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
      >
        Kritik dan Saran
      </h2>
      <p className={`mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
        Masukkan kritik dan saran Anda
      </p>
      <form
        onSubmit={handleSubmit}
        className={`p-4 mb-4 rounded shadow ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}
      >
        {alertMessage && <Alert message={alertMessage} />}

        <div className="mb-4">
          <label
            className={`block mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
            htmlFor="name"
          >
            Nama
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full p-2 border rounded ${inputClass}`}
            placeholder="Masukkan nama"
          />
        </div>
        <div className="mb-4">
          <label
            className={`block mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
            htmlFor="suggestion"
          >
            Saran
          </label>
          <textarea
            id="suggestion"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            className={`w-full p-2 border rounded ${inputClass}`}
            placeholder="Masukkan saran"
          />
        </div>
        <button
          type="submit"
          className="bg-[#009EA9] hover:bg-[#30969d] text-white py-2 px-4 rounded"
        >
          Kirim Saran
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
