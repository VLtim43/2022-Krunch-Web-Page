import React from "react";
import { ImageWrapper } from "./Image.styled";

type Props = {
  file: string;
  id: string;
  text?: string;
};

const Image = ({ file, id,text }: Props) => {
  if (id == "grid") {
    return (
      <ImageWrapper className="container">
        <img src={file} className="image" id={id} />
        <div className="overlay">
          <div className="text">{text}</div>
        </div>
      </ImageWrapper>
    );
  } else {
    return (
      <ImageWrapper>
        <img src={file} className="image" id={id} />
      </ImageWrapper>
    );
  }
};



export default Image;
