import styled from "styled-components";

export const DesignWrapper = styled.div`
    border-radius: 5px;
    margin-top: 20px;
    padding: 10px;


    &:hover {
      background-color: #F9F9F9;
      transition: 600ms;
    }
  svg {
    font-size: 2.23em;
    color: #4d8cf5;
  }

  h2 {
    text-transform: uppercase;
    margin-top: 15px;
    margin-bottom: 10px;
    color: #333;
    font-size: 20px;
    line-height: 28px;
    font-weight: 700;
  }

  p {
    font-size: 15px;
    line-height: 22px;
    font-weight: 400;
  }
`;
