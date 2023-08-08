import { useState, type PropsWithChildren } from "react";
import { Form, Button, Input } from "antd-mobile";
import { PHONE_RULES, CODE_RULES } from "@/utils/rules";
import type { LoginApi } from "@/api/useLogin";

/** 短信验证码登录 */
interface IPhoneLoginProps {
  onFinish: LoginApi["phoneLogin"];
  sendCode: LoginApi["sendCode"];
}
const initText = "发送验证码";
export const PhoneLogin = ({
  onFinish,
  sendCode,
}: PropsWithChildren<IPhoneLoginProps>) => {
  const [text, setText] = useState(initText);
  console.log(onFinish, sendCode);
  const onSubmit = (values: any) => {
    console.log(values);
  };
  const onSendCode = () => {};

  return (
    <Form
      onFinish={onSubmit}
      footer={
        <Button block type="submit" color="primary" shape="rounded">
          提交
        </Button>
      }
    >
      <Form.Item label="手机号" name="phone" rules={PHONE_RULES}>
        <Input placeholder="请输入手机号" />
      </Form.Item>
      <Form.Item
        label="短信验证码"
        name="msgCode"
        rules={CODE_RULES}
        extra={<a onClick={onSendCode}>{text}</a>}
      >
        <Input placeholder="请输入验证码" />
      </Form.Item>
    </Form>
  );
};
