import { BtnCTAGreen } from '../btnCTA';
import './styles.scss';
import iconTop from '../../assets/iconTop.png';
import ilustracao from '../../assets/topImg.png'
export function FirstSection() {

  return (
    <div className="InitialInfo">
      <div className="TopText">
        <div className="FirstLine">
          <img src={iconTop} alt="Robô ícone" />
          <p>Seja aprovado no Enem e Vestibulares :)</p>
        </div>
        <h1>Você escolhe o que aprender<span>.</span></h1>
        <p className="PContent">Aqui você terá toda assistência que precisa
          com materiais desenvolvido por <strong>mestres e doutores
            em matemática</strong></p>
        <BtnCTAGreen frase="Veja nossos planos" BgColor="3affe5" TextColor="252160" />
      </div>
      <img src={ilustracao} alt="ilustração" />
    </div>
  )
}