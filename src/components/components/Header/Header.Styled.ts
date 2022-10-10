import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: rgba(0, 0, 0, .8);
  padding-top: 1.5rem;
  display: flex;
  justify-content: center;
  height: 100px;
 
  

 &.a {
  background-color: rgba(0, 0, 0, .9);
  z-index: 1;
  width: 100%;
  position: fixed;
  top: 0%;
 }


 &.b {
  position: sticky;
 }

  .header-div {
   position: sticky;
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
    font-weight: 500;
  }

  img{
    margin: 30px 20px;
    width: 126.1px;
    height:  29.3px;
  }
 
 
`;
