import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/img/color-sharp.png'
import javascript from '../assets/img/javascript-logo.png'
import react from '../assets/img/react.svg'
import firebase from '../assets/img/firebase-logo.png'
import webDevelopment from '../assets/img/web-development-logo.png'

export default function Skills() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className='skill-bx'>
                        <h2>Skills</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia officiis laboriosam voluptates libero, vitae natus, quasi quae sequi quam quibusdam totam facere tempore necessitatibus illo consequatur, quidem suscipit et vero.</p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className='item'>
                                <img src={webDevelopment} alt='Image'/>
                                <h5>Web Development</h5>
                            </div>
                            <div className='item'>
                                <img src={javascript} alt='Image'/>
                                <h5>JavaScript</h5>
                            </div>
                            <div className='item'>
                                <img src={react} alt='Image'/>
                                <h5>React Native</h5>
                            </div>
                            <div className='item'>
                                <img src={''} alt='Image'/>
                                <h5>Typescript</h5>
                            </div>
                            <div className='item'>
                                <img src={firebase} alt='Image'/>
                                <h5>Firebase</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img className='background-image-left' src={colorSharp}/>
    </section>
  )
}
