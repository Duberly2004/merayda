import React from 'react'
import { Container, Button, Col} from 'react-bootstrap';
import imgHome from '../img/perfil.jpeg'
import '../styles/Home.css';
function Home() {
  return (
    // home => Clase personalizada
    <Container id='home' className="overflow-hidden home d-flex" style={{height:"90vh",width:"100%"}}>
      <Col className='m-auto text-center text-md-start'>
          <Col className='mb-5 d-flex justify-content-center flex-column'>
            <h1 className='text-warning'>Merayda</h1>
            <h1><i className='text-secondary'>official</i></h1>
            <p className='text-light'>¡Bienvenido ! Somos una agencia de consultoría y servicios especializados en negocios digitales.
            y estoy aquí para ayudarte a tener éxito en el mundo digital. Descubre cómo puedo ayudarte a mejorar tu presencia en línea y construir una marca personal exitosa. ¡Únete a mi comunidad hoy mismo!</p>
            <Col  style={{maxWidth:"350px"}} className=' m-auto m-md-0 '>
              <Button href='#contact' className='rounded-0 m-2' variant='warning'>Empezar ahora</Button>
              <Button href='#services' className='border rounded-0 m-2 text-light' variant='none'>Servicios</Button>
            </Col>
          </Col>
      </Col>

        <Col className='d-none d-md-block m-auto '>
          <img style={{maxWidth:"400px"}} className='w-90' src={imgHome} alt="Merayda perfil " />
        </Col>
    
    </Container>
  )
}

export default Home