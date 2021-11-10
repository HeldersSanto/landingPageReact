import './styles.scss'
import logoDesktop from '../../assets/logoDesktop.svg'
import { FaFacebookF } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { AiOutlineTwitter } from 'react-icons/ai'
import { RiArrowUpFill } from 'react-icons/ri'
import googleBtn from '../../assets/googleBtn.png'
import appstoreBtn from '../../assets/appstoreBtn.png'
import vectorC from '../..//assets/VectorC.svg'

export function Footer() {
  return (
    <footer className="Footer">
      <div className="FooterTop">
        <img src={logoDesktop} alt="Logoipsum" className="LogoDesktop" />
        <div className="LinksUteis">
          <ul>
            <h2>Localização</h2>
            <li>Av. Brg. Faria Lima , 1422 São Paulo - SP</li>
          </ul>
          <ul>
            <h2>Fale conosco</h2>
            <li>(22) 4442-0126</li>
            <li>info@digihouse.com</li>
          </ul>
          <ul>
            <h2>Políticas</h2>
            <li><a href="#">Direitos Autorais</a></li>
            <li><a href="#">Termos de uso</a></li>
            <li><a href="#">Políticas de privacidade</a></li>
          </ul>
        </div>
      </div>
      <div className="SocialMediaBtn">
        <a href="http://"><img src={googleBtn} alt="Botão ir ao google play" /></a>
        <a href="http://"><img src={appstoreBtn} alt="Botão ir ao App Store" /></a>
      </div>
      <div className="FooterBottom">
        <p className="Copyright"><img src={vectorC} /> <p>Copyright 2021. All Right Reserved </p></p>
        <div className="MediaReturn">
          <ul>
            <li><a href="#"><FaFacebookF size="20px" /></a></li>
            <li><a href="#">< AiOutlineTwitter size="20px" /></a></li>
            <li><a href="#">< RiInstagramFill size="20px" /></a></li>
          </ul>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>< RiArrowUpFill size="40px" color="#fff" /></button>
        </div>
      </div>
    </footer>
  )
}