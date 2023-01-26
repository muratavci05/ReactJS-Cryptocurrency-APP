import { makeStyles, Typography, LinearProgress } from "@material-ui/core";
import axios from "axios";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import CoinInfo from "../components/CoinInfo";
import { SingleCoin } from "../config/api";
import { CryptoState } from "../CryptoContext";

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

  const useStyles = makeStyles((theme) => ({
    container: {
      display:"flex",
      [theme.breakpoints.down("md")]: {
        flexDirection:"column",
        alignItems: "center",
      },
    },
    slideBar:{
      width: "30%",
      /* [theme.breakpoints.down("md")]: {
        width: "100%",
      } */
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      borderRight: "2px solid grey",
    },

  }));
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>sidebar{/*sidebar*/}</div>
      {/*chart*/}

      <CoinInfo coin={coin}/>
    </div>
  );
};

export default CoinPage;
