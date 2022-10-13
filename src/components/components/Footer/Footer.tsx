
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
        <p className="about-text"> © 2022 Krunch Landing Page, Designed By &nbsp; <Link className="black" text="Shuvo" href="https://dribbble.com/ImShuvo"/>  &nbsp; & Webflowed By &nbsp; <Link className="black" text="Fernando" href="https://github.com/FernandoValentim43"/></p>
    </div>

  </FooterWrapper>
);

export default Footer;
