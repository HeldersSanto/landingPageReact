import logo from '../../assets/logoMobile.svg';
import './styles.scss';
import { MdClose, MdMenu } from 'react-icons/md';
import { useState } from 'react';

export function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <header className="HeaderWrapper">
      <a href="http:#"><img src={logo} alt="Logo" /></a>
      <nav>
        <button onClick={toggleMenu} >
          {openMenu != true ?
            <MdMenu size="30px" color="#252160" /> :
            <MdClose size="30px" color="#252160" />
          }
        </button>

        <div className={`${openMenu != true ? "MenuMobile" : "MenuMobileClose"}`}>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Quem somos</a></li>
            <li><a href="">Planos</a></li>
            <li><a href="">Fale conosco</a></li>
            <li><a href="">Entrar</a></li>
          </ul>
        </div>
      </nav>
    </header >
  )
}