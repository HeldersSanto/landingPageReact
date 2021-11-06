import './BtnStyle.scss';
import { BsArrowRightShort } from 'react-icons/bs';

export function BtnCTAGreen(props) {
  let color = {
    background: `#${props.BgColor}`
  }
  return (
    <div className="BtnCTAGreen">
      <a href="#" style={color}>{props.frase} <BsArrowRightShort size="25px" /></a>
    </div >
  )
}