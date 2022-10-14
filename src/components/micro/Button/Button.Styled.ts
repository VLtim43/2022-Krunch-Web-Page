import styled from "styled-components";

export const ButtonWrapper = styled.div`


@media only screen and (max-width: 700px) {
  button {
    font-size: 2vw !important;
  }

}



  display: flex;
  button:focus {outline:0;}

  button {
    font-family: 'Open Sans', sans-serif;
    margin: 10px;
    padding: 11px 35px;
    border-radius: 5px;
    text-transform: uppercase;
    border: 1px solid #4d8cf5;
    font-size: 15px;
    color: white;

    cursor: pointer;
    font-weight : 600;
    -webkit-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
  }

  .default {
    
    background-color:  #3898ec;
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
