import React from "react";
import { ImageWrapper } from "./Image.styled";

type Props = {
  file: string;
  id: string;
};

const Image = ({ file, id }: Props) => {

    return (
      <ImageWrapper className="container">
        <img src={file} className="image" id={id}/>
        <div className="overlay">
          <div className="text">Hello World</div>
        </div>
      </ImageWrapper>
    )

}



  {/* <ImageWrapper className="container">
    <img src={file} id={Id} />
    <div className="middle">
      <p className="text">John Doe</p>
    </div>
  </ImageWrapper> */}


            

  


export default Image;
