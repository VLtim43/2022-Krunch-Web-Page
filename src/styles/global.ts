import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    font-family: nunito, sans-serif;
}

body {
    
    display: flex;
    flex-direction: column;
    position:relative;
    height: 1500px;
}


`;
