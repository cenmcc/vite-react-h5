import React from "react";
import style from './index.module.scss'
import { Button } from 'antd-mobile'
const Home: React.FC = () => {
  return (
    <>
    <Button color='primary'>按钮</Button>
      <div className={style.title}>Home</div>
      <div className={style.box}>
      </div>
    </>
  );
};


export default Home;
