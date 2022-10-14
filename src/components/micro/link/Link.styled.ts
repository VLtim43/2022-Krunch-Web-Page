import styled from "styled-components";

export const LinkWrapper = styled.div`
  display: flex;

  a {
   
    text-transform: uppercase;
    color: white;
    
    -webkit-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
    font-weight: 400;
    text-decoration: none;
    cursor: pointer;
  }

  & .news {
    
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0082f3;
   }

  & .default:hover {
    color: #0082f3;
  }

  & .black {
    color: #0082f3;
    display: flex;
    align-items: center;
  }
  & .black:hover {
    color: black;
  }

`;
