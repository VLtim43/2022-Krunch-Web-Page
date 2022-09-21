import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: rgba(34, 34, 34, .7);
  display: flex;
  justify-content: center;
 
  .header-div {
   display: flex;
   justify-content:space-between;
   flex-direction: row;
   margin-left: 12rem;
   margin-right: 12rem;
   width: 100%;
   max-width: 1300px;

   
  }

  nav {
   
    display: flex;
    justify-content: space-around;
  }

  a{
    margin: 30px 20px;
  }

  img{
    margin: 30px 20px;
  }
 
 
`;
