import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #222222;
  width: 100%;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 22px 0px 10px 0px;

  position: fixed;
  left: 0;
  bottom: 0;

  a {
    font-size: 13px;
    line-height: 1;
    text-transform: uppercase;
  }

  .links {
    display: flex;
    justify-content: space-around;
    width: 330px;
    padding: 15px;
  }

  .about {
    display: flex;
    justify-content: space-around;
    width: 600px;
    padding: 10px;
  }

  .about-text {
    width: 100%;
    display: flex;
    justify-content: center;
    color: #777;
    text-transform: uppercase;
    font-size: 13px;
    line-height: 1;
  }
`;
