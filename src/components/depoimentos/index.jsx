import './styles.scss'
import { SectionTitleTexts } from '../SectionTitleTexts'
import Carousel from 'react-elastic-carousel'
import { DepoimentoSingle } from './depoimentoSingle'
import avaliacao from '../../assets/avaliacao.svg'
import imgUser from '../../assets/Imageuser.png'
import imgUser2 from '../../assets/ImageUser2.png'
import imgUser3 from '../../assets/ImageUser3.png'

export function Depoimentos() {
  const BreakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ]
  return (
    <section className="Depoimentos">
      <SectionTitleTexts title="DEPOIMENTOS" subtitle="Recomendado por quem é expert no assunto" />
      <div className="DepoimentosCarousel">
        <Carousel
          breakPoints={BreakPoints}
          pagination={false}>
          <DepoimentoSingle starAvaliacao={avaliacao}
            avaliacao="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit
           pelle ntesque nibh arcu elementum odio justo. Rhoncus."
            userImg={imgUser}
            userName="Amanda Merien"
            userJob="Analista Junior"
          />

          <DepoimentoSingle starAvaliacao={avaliacao}
            avaliacao="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit
           pelle ntesque nibh arcu elementum odio justo. Rhoncus."
            userImg={imgUser2}
            userName="Lucas Correia"
            userJob="CEO / Creative IT" />

          <DepoimentoSingle starAvaliacao={avaliacao}
            avaliacao="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit
           pelle ntesque nibh arcu elementum odio justo. Rhoncus."
            userImg={imgUser3}
            userName="Rodrigo Godoy"
            userJob="Presidente / Amazon" />

          <DepoimentoSingle starAvaliacao={avaliacao}
            avaliacao="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit
           pelle ntesque nibh arcu elementum odio justo. Rhoncus."
            userImg={imgUser2}
            userName="Lucas Correia"
            userJob="CEO / Creative IT" />

          <DepoimentoSingle starAvaliacao={avaliacao}
            avaliacao="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit
           pelle ntesque nibh arcu elementum odio justo. Rhoncus."
            userImg={imgUser}
            userName="Amanda Merien"
            userJob="Analista Junior"
          />

          <DepoimentoSingle starAvaliacao={avaliacao}
            avaliacao="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit
           pelle ntesque nibh arcu elementum odio justo. Rhoncus."
            userImg={imgUser2}
            userName="Lucas Correia"
            userJob="CEO / Creative IT" />

          <DepoimentoSingle starAvaliacao={avaliacao}
            avaliacao="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit
           pelle ntesque nibh arcu elementum odio justo. Rhoncus."
            userImg={imgUser}
            userName="Amanda Merien"
            userJob="Analista Junior"
          />
        </Carousel>
      </div>
    </section>
  )
}