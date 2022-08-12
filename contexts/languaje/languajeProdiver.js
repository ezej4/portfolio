import React, { useState, useEffect } from "react";
import { LanguajeContext } from "./languajeContext";

const LanguajeProvider = ({ children }) => {
  const [languaje, setLanguaje] = useState("");

  useEffect(() => {
    const savedLanguajeLocal = localStorage.getItem("languaje");

    if (!!savedLanguajeLocal) {
      setLanguaje(savedLanguajeLocal);
    }
  }, []);

  useEffect(() => {
    if (!languaje) return;
    localStorage.setItem("languaje", languaje);
  }, [languaje]);

  return (
    <LanguajeContext.Provider value={[languaje, setLanguaje]}>{children}</LanguajeContext.Provider>
  );
};

export default LanguajeProvider;
