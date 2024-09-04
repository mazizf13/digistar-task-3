import { useState, useEffect } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState({ message: "", type: "" });

  useEffect(() => {
    if (alert.message) {
      const timer = setTimeout(() => {
        setAlert({ message: "", type: "" });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [alert]);

  return [alert, setAlert];
};

export default useAlert;
