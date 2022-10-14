import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  height: 100px;


  @media only screen and (max-width: 600px) {

    & {
      display: none !important;
    }
  }


  @media only screen and (max-width: 1300px) {

    .header-div {
      height: 20vw !important;
      margin-left: 20px !important;
      margin-right: 20px !important;
    }
  }

  @media only screen and (max-width: 1100px) {
    .header-div {
      margin: 0px !important;
    }

    .header-img {
      margin-top: 2rem;
    }

    a {
      display: none;
    }
  }

  &.a {
    background-color: rgba(0, 0, 0, 0.8);
    height: 80px;
    z-index: 1;
    width: 100%;
    position: fixed;
    top: 0%;
  }

  &.b {
    padding-top: 1.5rem;
  }

  .header-div {
    position: sticky;
    display: flex;
    justify-content: space-between;
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

  a {
    font-size: 16px;
    padding: 30px 18px;
    height: 30px;
    font-weight: 500;
  }

  img {
    margin: 2rem 1rem 1rem 5rem;
  }
`;
