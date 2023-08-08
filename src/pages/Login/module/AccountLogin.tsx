import type { PropsWithChildren } from "react";
import { Form, Button, Input } from "antd-mobile";
import type { LoginApi } from "@/api/useLogin";

/** 账户密码登录 */
interface IAccountLoginProps {
  onFinish: LoginApi["passwordLogin"];
}
export const AccountLogin = (props: PropsWithChildren<IAccountLoginProps>) => {
  return (
    <Form
      onFinish={props.onFinish}
      layout="vertical"
      footer={
        <Button block type="submit" color="primary" shape="rounded">
          提交
        </Button>
      }
    >
      <Form.Item
        label="手机号"
        name="phone"
        rules={[{ required: true, message: "手机号不能为空" }]}
      >
        <Input placeholder="请输入手机号" />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: "密码不能为空" }]}
      >
        <Input placeholder="请输入密码" />
      </Form.Item>
    </Form>
  );
};
