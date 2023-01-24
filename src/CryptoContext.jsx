import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react'

const crypto = createContext();

const CryptoContext = (children) => {
const [currency, setCurrency] = useState ("TRY");
const [symbol, setSymbol] = useState ("₺");

useEffect (()=> {
    if (currency === "TRY") setSymbol ("₺");
    else if (currency === "EUR") setSymbol ("€");
    else if (currency === "USD") setSymbol ("$");
},[currency]);


  return (
   <Crypto.Provider value={{currency, symbol, setCurrency}}>
    {children}
   </Crypto.Provider>
  )
}

export default CryptoContext;

export const CryptoState = () => {
    useContext(Crypto)
}