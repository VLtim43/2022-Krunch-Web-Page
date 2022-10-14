
import Image from "../../micro/img/Image"
import { FaLongArrowAltRight } from "react-icons/fa"
import { NewsWrapper } from "./News.styled"
import  Link from "../../micro/link/Link";


type Props = {
   text:string,
   date: string,
   smallText: string,
   file?: string,
  };
  


export const News = ({file, text, date, smallText} : Props) => {
  return (
    <NewsWrapper>
        <div className="img-text">
         <Image  id={"news"} file={file} />
           <h4>{text}</h4>
           <p className="date">{date}</p>
           <p className="text">{smallText}</p>
            <div className="link">
             <Link text={"Read more"} className={"news"} />
             <FaLongArrowAltRight color="#0082f3"/>
            </div>
          </div>
    </NewsWrapper>
  )
}
