import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const useFeedback = () => {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = localStorage.getItem("feedbacks");
    return savedFeedbacks ? JSON.parse(savedFeedbacks) : [];
  });

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const addFeedback = (newFeedback) => {
    setFeedbacks((prev) => [...prev, { ...newFeedback, id: uuidv4() }]);
  };

  const likeFeedback = (id) => {
    setFeedbacks((prev) =>
      prev.map((feedback) =>
        feedback.id === id
          ? { ...feedback, likes: feedback.likes + 1 }
          : feedback,
      ),
    );
  };

  const deleteFeedback = (id) => {
    setFeedbacks((prev) => prev.filter((feedback) => feedback.id !== id));
  };

  return {
    feedbacks,
    addFeedback,
    setFeedbacks,
    likeFeedback,
    deleteFeedback,
  };
};
