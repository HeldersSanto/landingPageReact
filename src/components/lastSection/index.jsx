import './styles.scss'
import appImg from '../../assets/appImg.png'
import iconTop from '../../assets/iconTop.png'
import { BtnCTAGreen } from '../btnCTA';

export function LastSection() {
  return (
    <section className="LastSection">
      <div className="AppInfo">
        <div className="RobotLine">
          <img src={iconTop} alt="Robô ícone" />
          <p>Baixe aulas no app e estude offline</p>
        </div>
        <p className="AppDescription">Receba lembretes no seu celular e tenha a
          facilidade de estudar a qualquer hora e de qualquer lugar.
          Baixe nosso app e confira.</p>
        <BtnCTAGreen frase="Veja nossos planos" BgColor="3affe5" TextColor="252160" />
      </div>
      <img src={appImg} alt="imagem do aplicativo" className="AppImg" />
    </section>
  )
}