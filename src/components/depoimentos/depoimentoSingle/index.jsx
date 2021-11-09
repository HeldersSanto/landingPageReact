import './styles.scss'
import aspas from '../../../assets/Vectoraspas.svg'


export function DepoimentoSingle(props) {
  return (
    <div className="DepoimentoSingle">
      <img src={props.starAvaliacao} className="StarAvaliacao" alt="Estrelas de avaliação" />
      <p className="AvaliacaoText">{props.avaliacao}</p>
      <div className="User">
        <img src={props.userImg} alt="Imagem de usuário" />
        <div className="UserInfo">
          <h1>{props.userName}</h1>
          <p>{props.userJob}</p>
        </div>
        <img src={aspas} />
      </div>
    </div>
  )
}