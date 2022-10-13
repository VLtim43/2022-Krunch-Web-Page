import { MdOutlineMonitor, MdWeb } from "react-icons/md";
import { DiAndroid } from "react-icons/di";
import { AiFillCamera } from "react-icons/ai";
import { VscWand } from "react-icons/vsc";
import { RiEarthFill } from "react-icons/ri";

import { DesignWrapper } from "./Design.styled";

type Props = {
  bigText: string;
  smallText: string;
  icon?: string;
};

export const Design = ({ bigText, smallText, icon }: Props) => {
let Icon
  switch (icon) {
    case "monitor":
      Icon = <MdOutlineMonitor />;
      
      break;
    case "web":
      Icon = <MdWeb />;
      
      break;
    case "android":
      Icon = <DiAndroid />;
     
      break;
    case "camera":
      Icon = <AiFillCamera />;
     
      break;
    case "wand":
      Icon = <VscWand />;
      
      break;
    case "globe":
      Icon = <RiEarthFill />;
      
      break;
  }

  return (
    <DesignWrapper>
        <p>{Icon}</p>
      <h2>{bigText}</h2>
      <p>{smallText}</p>
    </DesignWrapper>
  );
};
