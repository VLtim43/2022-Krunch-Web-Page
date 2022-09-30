import { AboutWrapper } from "./About.styled";



type Props = { 
    bigText : string, 
    className ?: string,
    smallText : string
}; 

const About = ({ className , bigText , smallText }: Props) => (
  <AboutWrapper>
    <h2>{bigText}</h2>
    <p>{smallText}</p>
    <span className="line"></span>
  </AboutWrapper>
);

export default About;
