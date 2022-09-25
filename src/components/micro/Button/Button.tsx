import { ButtonWrapper } from "./Button.Styled";

type Props = { 
    text : string, 
    className?: string,
}; 

const Button = ({ className, text} : Props) => (
  <ButtonWrapper>
   <button className={className}>{text}</button>
  </ButtonWrapper>
);

export default Button;
