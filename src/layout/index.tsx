import React from "react";
import { Outlet } from "react-router-dom";
import { Tabs } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
const tabs = [
  {
    title: '首页',
    link: '/'
  },
  {
    title: '关于',
    link: '/about'
  }
]
const Layout: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Tabs onChange={key => {
      navigate(key)
    }}>
      {tabs.map((v) => {
        return (
          <Tabs.Tab title={v.title} key={v.link} >
            <Outlet />
          </Tabs.Tab>
        );
      })}
    </Tabs>
  );
};

export default Layout;
