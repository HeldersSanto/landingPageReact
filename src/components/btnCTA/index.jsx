import './BtnStyle.scss';
import { BsArrowRightShort } from 'react-icons/bs';

export function BtnCTAGreen(props) {
  let fontColor = {
    color: `#${props.TextColor}`
  }
  let color = {
    background: `#${props.BgColor}`
  }
  return (
    <div className="BtnCTAGreen" style={fontColor}>
      <a href="#" style={color}>{props.frase} <BsArrowRightShort size="25px" /></a>
    </div >
  )
}