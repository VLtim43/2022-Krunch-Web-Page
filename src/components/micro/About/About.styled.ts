import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-family: Nunito, sans-serif;
  color: #333;
  line-height: 36px;
  margin-bottom: 70px;


  h2 {
    text-transform: uppercase;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 28px;
    font-weight: 700;
  }

  p {
    font-style: italic;
    font-size: 1.2rem;
    line-height: 28px;
    color: #5c5c5c;
    font-weight: 400;
  }

  .line {
    display: block;
    width: 70px;
    height: 2px;
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
    background-color: #4d8cf5;
  }
`;
