import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Header() {
  const lgout=()=>{
    nav('./')
    sessionStorage.removeItem('userData')
  }
  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          {/* <i className="fa-solid fa-radio fa-beat-fade" style={{color: "#FFD438"}}></i> */}
          <i className="fa-solid fa-box fa-beat-fade text-info"></i>
           {' '}
            Media player
          </Navbar.Brand>
        </Container>
        <button className='btn  btn-danger' onClick={lgout}>Log out</button>
      </Navbar>
    </>
  )
}

export default Header