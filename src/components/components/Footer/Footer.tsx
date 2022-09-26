
import {FooterWrapper} from "./Footer.Styled"
import  Link  from "../../micro/link/Link"

type Props = { 
   
}; 

const Footer = () => (
  <FooterWrapper>
    <div className="links">
        <Link className="default" text="facebook"/>
        <Link className="default" text="twitter"/>
        <Link className="default" text="instagram"/>
        <Link className="default" text="linkedin"/>
    </div>

    <div className="about">
        <p className="about-text"> 2022 Landing Page - <Link className="black" text="fernando"/></p>
    </div>

  </FooterWrapper>
);

export default Footer;
