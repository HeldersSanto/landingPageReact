import { useRef } from 'react';
import { Rerousel } from 'rerousel';
import './CaroselStyles.scss';
import img1 from '../../assets/clients/client1.jpeg'
import img2 from '../../assets/clients/client2.jpeg'
import img3 from '../../assets/clients/client3.jpeg'
import img4 from '../../assets/clients/client4.jpeg'
import img5 from '../../assets/clients/client5.jpeg'
import img6 from '../../assets/clients/client6.jpeg'
import img7 from '../../assets/clients/client7.jpeg'
import img8 from '../../assets/clients/client8.jpeg'


export function Carosel() {
  const ref = useRef(null)
  return (
    <div className="Slider">
      <Rerousel itemRef={ref}>
        <div className="CaroselDiv" ref={ref}>
          <img src={img1} alt="Cliente 1" />
        </div>
        <div className="CaroselDiv" ref={ref}>
          <img src={img2} alt="Cliente 2" />
        </div>
        <div className="CaroselDiv" ref={ref}>
          <img src={img3} alt="Cliente 3" />
        </div>
        <div className="CaroselDiv" ref={ref}>
          <img src={img4} alt="Cliente 4" />
        </div>
        <div className="CaroselDiv" ref={ref}>
          <img src={img5} alt="Cliente 5" />
        </div>
        <div className="CaroselDiv" ref={ref}>
          <img src={img6} alt="Cliente 6" />
        </div>
        <div className="CaroselDiv" ref={ref}>
          <img src={img7} alt="Cliente 7" />
        </div>
        <div className="CaroselDiv" ref={ref}>
          <img src={img8} alt="Cliente 8" />
        </div>
      </Rerousel>
    </div>
  )
}