import React, { useEffect } from 'react'
import {Row, Statistic, Typography, Col} from 'antd'
import "./styles/Style.css";
import axios from 'axios';

/* import {useGetCryptosQuery} from "../services/cryptoApi";
 */const { Title } = Typography;


const HomePage = () => {

  /* const { data, isFetching} = useGetCryptosQuery();
  console.log("data", data); */

  useEffect (()=>{
    axios
        .get("https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges")
        .then((res)=>{
          console.log("responsive",res)})
        .catch((err)=>{
          console.log("hata",err)
        })

  },[]);
  return (
    <div>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row className='statisticHeading'>
        <Col  span={12}><Statistic title="Total Cryptocurrencies" value="5" /></Col>
        <Col  span={12}><Statistic title="Total Exchanges" value="5" /></Col>
        <Col  span={12}><Statistic title="Total Market Cap" value="5" /></Col>
        <Col  span={12}><Statistic title="Total 24h Volume" value="5" /></Col>
        <Col  span={12}><Statistic title="Total Markets" value="5" /></Col>

      </Row>
      </div>
  )
}

export default HomePage