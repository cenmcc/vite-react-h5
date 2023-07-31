import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.scss";
const Header: React.FC = () => {
  return (
    <ul className={style.header}>
      <li className={style.item}>
        <Link to="/">首页</Link>
      </li>
      <li className={style.item}>
        <Link to="/about">关于我们</Link>
      </li>
    </ul>
  );
};

export default Header;
