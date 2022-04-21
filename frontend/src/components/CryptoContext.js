import React, { createContext, useContext, useEffect, useState } from "react";

export const CryptoContext = createContext();

export const CryptoContextProvider = ({ children }) => {
  const [currency, setCurrency] = useState("usd");
  const [symbol, setSymbol] = useState("$");

  useEffect(() => {
    if (currency === "usd") setSymbol("$");
    else if (currency === "cad") setSymbol("CAD");
    //€  = hold `alt` tab then type `0128`
    else if (currency === "eur") setSymbol("€");
  }, [currency]);
  console.log(currency);
  return (
    <CryptoContext.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </CryptoContext.Provider>
  );
};
