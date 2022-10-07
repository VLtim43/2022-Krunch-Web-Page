import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: rgba(0, 0, 0, .8);
  padding-top: 1.5rem;
  display: flex;
  justify-content: center;
  max-height: 110px;
  width: 100vw;
  

  .header-div {
   display: flex;
   justify-content:space-between;
   flex-direction: row;
   margin-left: 8rem;
   margin-right: 8rem;
   width: 100%;
   max-width: 1300px;
  }

  nav {
    display: flex;
    justify-content: space-around;
  }

  a{
    padding: 30px 18px;
    height: 30px;
  }

  img{
    margin: 30px 20px;
  }
 
 
`;
