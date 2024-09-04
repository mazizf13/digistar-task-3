import React, { useState, useEffect } from "react";
import useAlert from "../../hooks/useAlert";
import Alert from "../Alert";
import { useDarkMode } from "../../contexts/DarkModeContext";

const FeedbackForm = ({ addFeedback, setFeedbacks }) => {
  const { isDarkMode } = useDarkMode();
  const [name, setName] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [alert, setAlert] = useAlert();

  useEffect(() => {
    const storedFeedbacks = JSON.parse(localStorage.getItem("feedbacks"));
    if (storedFeedbacks) {
      setFeedbacks(storedFeedbacks);
    }
  }, [setFeedbacks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !suggestion) {
      setAlert({
        message: "Nama dan Saran tidak boleh kosong!",
        type: "error",
      });
    } else {
      addFeedback({ name, suggestion, likes: 0 });
      setName("");
      setSuggestion("");
      setAlert({
        message: "Kritik atau Saran berhasil dikirim!",
        type: "success",
      });
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
        {alert.message && <Alert message={alert.message} type={alert.type} />}

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
            placeholder="Masukkan nama..."
          />
        </div>
        <div className="mb-4">
          <label
            className={`block mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
            htmlFor="suggestion"
          >
            Kritik Atau Saran
          </label>
          <textarea
            id="suggestion"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            className={`w-full p-2 border rounded ${inputClass}`}
            placeholder="Masukkan kritik atau saran..."
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
