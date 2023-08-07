import { useState,useEffect, type FC } from "react";
import style from "./index.module.scss";
import { useUserStore } from "@/store";
import request from '@/utils/request'
import { Button } from "antd-mobile";
const Home: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [user, setUser] = useUserStore((state) => [ state.user, state.setUser ]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        request.get('/product/indexVipLive')
      }
      fetchData()
    } catch(e) {}

  }, [])
  return (  
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <span>{user?.name}</span>
      <Button color="primary" onClick={() => {
        request.get('/product/indexVipLive')
        setUser({ name: inputValue })
      }
        
        
      }>
        按钮
      </Button>
      <div className={style.title}>Home</div>
      <div className={style.box}></div>
    </>
  );
};

export default Home;
