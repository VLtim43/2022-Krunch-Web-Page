import React from "react";
import { ImageWrapper } from "./Image.styled"

type Props = { 
    file: string;
    Id: string;
}; 

const Image = ({file, Id}:Props) => 

<ImageWrapper >
   <img src={file} id={Id}/>
</ImageWrapper>


export default Image
