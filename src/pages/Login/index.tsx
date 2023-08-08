import React from "react";
import { Tabs, Checkbox } from "antd-mobile";
import style from "./index.module.scss";
import { AccountLogin, PhoneLogin } from "./module";
import { useLoginApi } from "@/api/useLogin";


const Login: React.FC = () => {
  const { sendCode, phoneLogin, passwordLogin } = useLoginApi();
  return (
    <div className={style["login-box"]}>
      <Tabs>
        {/* 验证码登录 */}
        <Tabs.Tab title="验证码登录" key="phone">
          <PhoneLogin onFinish={phoneLogin} sendCode={sendCode} />
        </Tabs.Tab>
        {/* 账号密码登录 */}
        <Tabs.Tab title="密码登录" key="password">
          <AccountLogin onFinish={passwordLogin} />
        </Tabs.Tab>
      </Tabs>
      <Checkbox value="请输入" block className={style["check"]}>
        <span>
          我已阅读并同意
          <a href="https://mobile.bencai.cn/#/pages/websecurity2">
            《用户协议/隐私策略》
          </a>
        </span>
      </Checkbox>
    </div>
  );
};

export default Login;
