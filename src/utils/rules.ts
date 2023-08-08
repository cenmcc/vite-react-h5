// 手机号验证规则
export const PHONE_RULES = [
  { required: true, message: "手机号不能为空" },
  {
    pattern:
      /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/,
    message: "请输入11位正确的手机号码",
  },
];

// 密码规则
export const PASSWORD_RULES = [];

// 验证码验证规则
export const CODE_RULES = [
  { required: true, message: "验证码不能为空" },
  { pattern: /^\d{6}$/, message: "长必须为6位数字" },
];
