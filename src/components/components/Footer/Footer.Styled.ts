import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #222222;
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  a {
    font-size: 13px;
    line-height: 1;
    text-transform: uppercase;
  }

  .links {
    display: flex;
    justify-content: space-around;
    background-color: red;
    width: 500px;
  }

  .about {
    background-color: pink;
    display: flex;
    justify-content: space-around;
    background-color: red;
    width: 500px;
  }

  .about-text {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
