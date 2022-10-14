import React from "react";
import { ImageWrapper } from "./Image.styled";

type Props = {
  file: any;
  id: string;
  text?: string;
  text2?: string;
};

const Image = ({ file, id, text, text2 }: Props) => {
  if (id == "grid") {
    return (
      <ImageWrapper className="container">
        <img src={file} className="image" id={id} />
        <div className="overlay">
          <div className="text">{text}</div>
        </div>
      </ImageWrapper>
    );
  } else if (id == "grid-2") {
    return (
      <ImageWrapper>
        <div className="container">
          <img src={file} className="image" id={id} />
          <div className="overlay">
            {/* <div className="text">{text}</div> */}
          </div>
        </div>
        <h3>{text}</h3>
        <p>{text2}</p>
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
