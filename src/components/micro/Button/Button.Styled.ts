import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;

  button {
    font-family: 'Open Sans', sans-serif;
    margin: 10px;
    padding: 10px 30px;
   font-size: 18px;
    border-radius: 5px;
    background-color: #4d8cf5;
    color: #fff;
    text-transform: uppercase;
    display: inline-block;
    padding: 12px 30px;
    background-color: #3898ec;
    color: white;
    border: 1px solid #3898ec;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;
    font-weight : 600;
    -webkit-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
  }

  .default {
    border: 1px solid transparent;
  }

  .transparent {
    background-color: transparent;
  }

  .transparent-b {
    background-color: transparent;
    color: black;
  }


  .transparent:hover {
    background-color:  #3898ec;
  }

  .transparent-b:hover {
    background-color:  #3898ec;
    color: white;
  }


  button:hover {
    background-color: #252525;
  }
`;
