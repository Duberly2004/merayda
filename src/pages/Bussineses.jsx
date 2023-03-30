import React from 'react'
import { Col, Container } from 'react-bootstrap'
import imgBussineses from '../img/imgBussineses.png'
function Bussineses() {
  return (
    <Container id='services' className='pt-5 d-flex flex-column-reverse flex-md-row justify-content-center align-items-center'>
        <Col style={{width:"100%",maxWidth:"400px"}} className='text-center d-flex'>
          <img style={{width:"100%"}} src={imgBussineses} alt="img Merayda" />
        </Col>
        <Col>
          <h2 className='text-warning'>Negocios y Finanzas <br />Digitales</h2>
          <p className='text-light pt-3'>De nada vale trabajar duro, sino trabajas inteligente mente.
          Desde el marketing digital hasta la gestión financiera, nuestro objetivo es proporcionar información valiosa para que puedas tomar decisiones informadas y llevar tu negocio al siguiente nivel. 
          ¡Únete a nuestra comunidad de empresarios y comienza a transformar tu negocio hoy mismo!.</p>
        </Col>
    </Container>
  )
}

export default Bussineses

{/* <Container className='border text-center' style={{width:"100%",maxWidth:"400px"}}> */}
