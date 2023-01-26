import { makeStyles } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../config/api";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoins] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoins(data);
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  const useStyles = makeStyles(() => ({}));
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>{/*sidebar*/}</div>
      {/*chart*/}
    </div>
  );
};

export default CoinPage;
