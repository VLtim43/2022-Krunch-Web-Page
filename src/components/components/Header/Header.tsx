import React from "react";
import { HeaderWrapper } from "./Header.Styled";
import Link from "../../micro/link/Link";

 

const Header = () => 

<HeaderWrapper >
    <header>
        <img src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c2da8652f6a18001ef1ce6_logo.png" className="header-img"/>
        <nav className="header-nav">
            <Link className={"default"} href={"#"} text={"home"}/>
            <Link className={"default"} href={"#"} text={"about"}/>
            <Link className={"default"} href={"#"} text={"portfolio"}/>
            <Link className={"default"} href={"#"} text={"services"}/>
            <Link className={"default"} href={"#"} text={"team"}/>
            <Link className={"default"} href={"#"} text={"blog"}/>
            <Link className={"default"} href={"#"} text={"contact"}/>
        </nav>
    </header>



</HeaderWrapper>


export default Header