import { useState,useEffect, type FC } from "react";
import style from "./index.module.scss";
import { useUserStore } from "@/store";
import { Button } from "antd-mobile";
const Home: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [user, setUser] = useUserStore((state) => [ state.user, state.setUser ]);
  return (  
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <span>{user?.name}</span>
      <Button color="primary" onClick={() => {
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
