import React from "react";
import { LinkWrapper } from "./Link.styled"

type Props = { 
    text : string, 
    className : string,
    href? : string
}; 

const Link = ({ className , text , href }: Props) => 

<LinkWrapper >
    <a className={className} href={href}>{text}</a>
</LinkWrapper>


export default Link
