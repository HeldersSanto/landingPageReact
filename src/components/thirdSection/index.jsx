import { SectionTitleTexts } from "../SectionTitleTexts";
import rocketImg from '../../assets/rocketImg.png';
import guyImg from '../../assets/guy.png';
import './styles.scss';

export function ThirdSection() {
  return (
    <section className="ThirdSection">
      <div className="SectionContent SectionContentAlign">
        <SectionTitleTexts title="100% MATEMÁTICA"
          subtitle="Matemática para quem quer entrar na facul."
          content="Somos um cursinho online especialista em ensinar matemática. 
          Temos os melhores professores mestres e doutores para tirar suas 
          dúvidas e te ensinar matemática desde a teoria até a resolução
          de exercícios de todos os níveis." />

        <img src={rocketImg} alt="Garoto em foguete." />
      </div>
      <div className="SectionContent">
        <SectionTitleTexts title="QUER SER APROVADO?"
          subtitle="Se seu foco é ser aprovado, nós estamos aqui por você."
          content="Somos um cursinho online especialista em ensinar matemática.
          Temos os melhores professores mestres e doutores para tirar suas 
          dúvidas e te ensinar matemática desde a teoria até a resolução de 
          exercícios de todos os níveis." />
        <img src={guyImg} alt="Garoto feliz" />
      </div>
    </section>
  )
}