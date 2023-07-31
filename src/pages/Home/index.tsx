import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <div className="title">Home</div>
      <Link to="/about">关于</Link>
      <Middle>你好</Middle>
    </HomeWrapper>
  );
};

const Middle = (props: React.PropsWithChildren) => {
  return (
    <div>
      Middle
      {props.children}
    </div>
  );
};

const HomeWrapper = styled.div`
  background-color: green;
  .title {
    color: red;
  }
`;

export default Home;
