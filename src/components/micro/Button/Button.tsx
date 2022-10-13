import { ButtonWrapper } from "./Button.Styled";

type Props = { 
    text : string, 
    className?: string,
    id?: string
}; 

const Button = ({ className, text, id} : Props) => (
  <ButtonWrapper>
   <button id={id} className={className}>{text}</button>
  </ButtonWrapper>
);

export default Button;
