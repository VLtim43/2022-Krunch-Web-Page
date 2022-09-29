import { ParagraphWrapper } from "./Paragraph.styled";

type Props = { 
    text : string, 
    className?: string,
}; 

const Paragraph = ({ className, text} : Props) => (
  <ParagraphWrapper>
   <p>{text}</p>
  </ParagraphWrapper>
);

export default Paragraph;
