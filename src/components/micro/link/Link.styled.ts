import styled from "styled-components";

export const LinkWrapper = styled.div`
  display: flex;

  a {
    margin: 0 !important;
    text-transform: uppercase;
    color: white;
    font-size: 1rem;
    -webkit-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    
    
    

  }

  & .default:hover {
    color: #0082f3;
  }

  & .black { color: #0082f3;}
  & .black:hover {
    color: black
  }
`;
