import React from 'react'
import { Alert, Col, Container,Row } from 'react-bootstrap'
import logo from '../img/logo.svg'
import facebook from '../img/facebook.svg'
import instagram from '../img/instagram.svg'
import telegram from '../img/telegram.svg'
import tiktok from '../img/tik-tok.svg'
import whatsapp from '../img/whatsapp.svg'
// React icons
import {FaHome} from 'react-icons/fa';
import {IoIosContact} from 'react-icons/io';
import {GiSkills} from 'react-icons/gi';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from 'react'

function Footer() {
  const [copied,setCopie] = useState(false)
  return (
    <Container id='contact' className='text-center pt-5 '>
      <Container className='d-flex flex-column flex-md-row d-flex justify-content-center align-items-center'>
        <Col className='text-center text-md-start '>
          <a href="#home"><img style={{width:"30%"}} src={logo} alt="Merayda logo" /></a>
          <h5 className='text-light'><span className='text-warning'>Merayda</span><i> official</i></h5>
        </Col>
        <Col className='d-flex flex-column m-5'>
            <h5 className='text-warning'>Navegación</h5>
          <Container style={{maxWidth:"60px"}} className="mt-2">
            <a className='text-warning text-decoration-none' href='#services'><GiSkills size={25} color='#ffca2c'/>&nbsp;Servicios</a>
            <a className='text-warning text-decoration-none' href='#home'><FaHome size={25} color='#ffca2c'/>&nbsp; Home</a>
          </Container>
        </Col>
        <Col className='text-start'>
          <h6 className='text-warning'>Contáctame</h6>
            <Col className='d-flex justify-content-center align-items-center'>
              <Col>
                <p className='text-warning'>Email</p>
              </Col>
              <Col>
                <CopyToClipboard text={'Guevarachinchaymerayda20042004@gmail.com'}>
                  <p className='text-light' onClick={()=> setCopie(true)}>
                    {copied ? "Email copiado ✔️ ":"Copiar email"}
                    {!copied && (
                      <span className='text-warning' style={{ fontSize: "25px", marginLeft: "5px" }}>&#x2398;</span>
                    )}
                  </p>
                </CopyToClipboard>
              </Col>
          </Col>
          <p className='text-light'><span className='text-warning'>Telefono: </span> +51 927 486 901</p>
        </Col>
      </Container>

      <Container style={{maxWidth:"300px"}} className='pt-4 d-flex justify-content-between flex-wrap'>
        <a href="https://www.facebook.com/profile.php?id=100082352905761&mibextid=ZbWKwL" target='_blank'><img style={{maxWidth:"40px"}} src={facebook} alt="Merayda Facebook" /></a>
        <a href="https://www.instagram.com/meraydaofficial28/" target='_blank'><img style={{maxWidth:"40px"}} src={instagram} alt="Merayda Instagram" /></a>
        <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Ftiktok.com%2F%40meraydaguevara%3Ffbclid%3DIwAR2O9AwQ5v3kjO5RwMUeyNerKieHEX76TLhKDQC1V1hdwSrk_q5S-ocNzbA&h=AT3G4fO78SpW013y5jx7FCNX1X6vPyVCWjVN3trr54QsJjt4njm1cHKoixeBfurELVimx2Ve3NRO8K_ba5iR6OKYMm7MJIUrvpKi5VXBl2T5X5r_peoG9Mwrk_ObqVZesKQq" target='_blank'><img style={{maxWidth:"40px"}} src={tiktok} alt="Merayda tiktok" /></a>
        <a href="https://wa.link/zy6w39" target="_blank"><img style={{maxWidth:"40px"}} src={whatsapp} alt="Merayda whatsapp " /></a>
      </Container>
      <hr className='border'/>      
      <p className='text-light'>Copyright © 2023 Reservados todos los derechos</p>
    </Container>
  )
}

export default Footer