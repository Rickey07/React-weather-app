import React, { createContext, useState, useContext } from "react";

const cityContext = createContext();

export function CityContextProvider({ children }) {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  return (
    <>
      <cityContext.Provider
        value={{ city, setCity, data, setData, error, setError }}
      >
        {children}
      </cityContext.Provider>
    </>
  );
}

export function useCityContext() {
  return useContext(cityContext);
}
