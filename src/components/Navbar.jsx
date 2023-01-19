import React from "react";
import { Avatar, Typography, Menu, Button } from "antd";
import { Link } from "react-router-dom";
import icon from "./images/logo.png";
import {
  HomeOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import "./styles/Style.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="logoContainer">
        <Avatar src={icon} />
        <Typography.Title level={2} className="logo">
          <Link to="/">
            Cryptoverse
          </Link>
        </Typography.Title>
        <Button className="menuControlContainer"/*  onClick={} */><MenuOutlined/></Button>
      </div>
      <Menu className="menuNavbar" theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/" className="linkTo">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies" className="linkTo">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges" className="linkTo">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news" className="linkTo">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
