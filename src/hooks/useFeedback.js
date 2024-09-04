import { useState, useEffect } from "react";

export const useFeedback = () => {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = localStorage.getItem("feedbacks");
    return savedFeedbacks ? JSON.parse(savedFeedbacks) : [];
  });

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const addFeedback = (newFeedback) => {
    setFeedbacks((prev) => [...prev, newFeedback]);
  };

  const likeFeedback = (index) => {
    setFeedbacks((prev) =>
      prev.map((feedback, i) =>
        i === index ? { ...feedback, likes: feedback.likes + 1 } : feedback,
      ),
    );
  };

  const deleteFeedback = (index) => {
    setFeedbacks((prev) => prev.filter((_, i) => i !== index));
  };

  return {
    feedbacks,
    addFeedback,
    setFeedbacks,
    likeFeedback,
    deleteFeedback,
  };
};
