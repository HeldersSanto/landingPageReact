import './styles.scss'
import compassImg from '../../assets/compassIcon.svg'
import operatorImg from '../../assets/operatorIcon.svg';
import boxesImg from '../../assets/boxesIcon.svg';
import { BtnCTAGreen } from '../btnCTA';
import girl from '../../assets/girl.png'

export function Differentials() {
  return (
    <div className="DifferentialsWrapper">
      <div className="DifferentialsSide">
        <div className="DifferentialsSingle">
          <div className="ImgBorder"><img src={operatorImg} alt="" /></div>
          <div className="DifferentialsText">
            <h4>100% focado na Matemática</h4>
            <p>Todo material é construído por profissionais
              especializados e com foco no perfil de
              cada vestibular.</p>
          </div>
        </div>
        <div className="DifferentialsSingle">
          <div className="ImgBorder"><img src={boxesImg} alt="" /></div>
          <div className="DifferentialsText">
            <h4>Acompanhamento de perto!</h4>
            <p>Todo o suporte que você precisa para
              aprender o conteúdo dos principais vestibulares!</p>
          </div>
        </div>
        <div className="DifferentialsSingle LastDiv">
          <div className="ImgBorder"><img src={compassImg} alt="" /></div>
          <div className="DifferentialsText">
            <h4>Matemática de um jeito fácil!</h4>
            <p>Resolução instantânea de qualquer equação
              algébrica na plataforma, além de vídeos,
              apostilas, simulados e central de dúvidas 24h!</p>
          </div>
        </div>
        <BtnCTAGreen frase="Quero ser aprovado" BgColor="252160" TextColor="FFFFFF" />
      </div>
      <img src={girl} alt="Garota feliz" />
    </div>
  )
}