import styled from "styled-components";

export const NewsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 360px;

  h4 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-family: Nunito, sans-serif;
    color: #333;
    font-size: 20px;
    line-height: 28px;
    font-weight: 700;
  }

  .text {
    font-family: "Open Sans", sans-serif;
    color: #5c5c5c;
    font-size: 15px;
    line-height: 22px;
    font-weight: 400;
  }

  .date {
    margin-bottom: 10px;
    color: #999;
    font-size: 14px;
    line-height: 1;
    font-style: italic;
    font-weight: 600;
  }

  div img {
    width: 100%;
    
}

  .link {
    margin-top: 1rem;
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    max-width: 105px;
    
  }

  .link:hover {
    * {
        color: black;
        transition: 200ms !important;
    }
  }

 

  .link a {
    font-size: 13px;
    line-height: 1;
    font-weight: 600;
    text-transform: uppercase;

  }
`;
