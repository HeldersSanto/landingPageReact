import { BsCheck } from 'react-icons/bs'
import { BtnGradient } from '../../btnGradient'
import { BtnSolid } from '../../btnSolid'
import Star from '../../../assets/star.png'
import './styles.scss'


export function PlansBox(props) {
  let BgColor = {
    background: `#${props.BgColor}`
  }

  let Color = {
    color: `#${props.FontColor}`
  }
  return (
    <div className="PlansBox" style={BgColor}>
      <p>{props.duration}</p>
      <h4 style={Color}>{props.planType}</h4>
      {props.Star == "True" ?
        <div className="StarImg">
          <img src={Star} alt="Preço promocional" />
          <div>
            <h2>70%</h2>
            <p>de desconto</p>
          </div>
        </div>
        : "ola"
      }
      <p className="Vantagens">vantagens</p>
      <ul style={Color}>
        <li><p><BsCheck size="20px" /></p><p>{props.v1}</p></li>
        <li><p><BsCheck size="20px" /></p><p>{props.v2}</p></li>
        <li><p><BsCheck size="20px" /></p><p>{props.v3}</p></li>
        <li><p><BsCheck size="20px" /></p><p>{props.v4}</p></li>
        <li><p><BsCheck size="20px" /></p><p>{props.v5}</p></li>
      </ul>
      <div className="BottomBox">
        <div className="Price">
          <p>de {props.from} por</p>
          <h1 style={Color}>
            <span className="RS">R$</span>
            {props.by}
            <span className="Pagamento">{props.pagamento}</span>
          </h1>
          <p>{props.info}</p>
        </div>
        {props.BtnBgColor == "gradient" ?
          <BtnGradient />
          :
          <BtnSolid />
        }
      </div>
    </div>
  )
}
PlansBox.defaultProps = {
  BtnBgColor: "2525160"
}