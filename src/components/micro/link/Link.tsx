import React from "react";
import { LinkWrapper } from "./Link.styled"

type Props = { 
    text : string, 
    className : string,
    sec? : string
}; 

const Link = ({ className , text , sec}: Props) => 

<LinkWrapper className={className}>
    <a href={sec}>{text}</a>
</LinkWrapper>


export default Link
