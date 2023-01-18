import React from "react";
import { Avatar, Typography, Menu } from "antd";
import { Link } from "react-router-dom";
import icon from "./images/logo.png";
import { HomeOutlined, FundOutlined, MoneyCollectOutlined, BulbOutlined } from "@ant-design/icons";
 
const Navbar = () => {
  return (
    <div className="navbarContainer">
     <div className="logoContainer">
        <Avatar src={icon}/>
        <Typography.Title level={2} className="logo">
            <Link to="/" style={{color:"white"}} >Crypto<span>verse</span></Link>
        </Typography.Title>
     </div>
     <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined/>}>
            <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined/>}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined/>}>
            <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined/>}>
            <Link to="/news">News</Link>
        </Menu.Item>
     </Menu>
    </div>
  )
};

export default Navbar;
