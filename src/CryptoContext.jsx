import React, { useEffect, useState, useContext, createContext } from "react";
import axios from "axios";
import { CoinList } from "./config/api";
const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("TRY");
  const [symbol, setSymbol] = useState("₺");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    console.log(data);

    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    if (currency === "TRY") setSymbol("₺");
    else if (currency === "EUR") setSymbol("€");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <Crypto.Provider
      value={{ currency, symbol, setCurrency, coins, loading, fetchCoins }}
    >
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};

//version 2
