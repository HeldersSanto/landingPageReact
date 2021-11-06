import { BtnCTAGreen } from '../btnCTA';
import styles from './styles.module.scss';
import iconTop from '../../assets/iconTop.png';

export function FirstSection() {
  return (
    <div className={styles.InitialInfo}>
      <div className={styles.TopText}>
        <img src={iconTop} alt="Robô ícone" />
        <p>Seja aprovado no Enem e Vestibulares :)</p>
        <h1>Você escolhe o que aprender<span>.</span></h1>
        <p>Aqui você terá toda assistência que precisa
          com materiais desenvolvido por <strong>mestres e doutores
            em matemática</strong></p>
      </div>
      <BtnCTAGreen frase="Veja nossos planos" BgColor="3affe5" />
    </div>
  )
}