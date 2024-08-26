import React from 'react'
import {Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Footer() {
  return (
   <>
   <div className='bg-light py-2 container-fluid'>
<Row className='p-5'>
  <Col sm={12} md={5}>
  <h3>Media player</h3>
  <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur accusantium repellendus at quod harum tenetur! Expedita facere aspernatur officiis incidunt quod neque? Nulla hic aperiam sequi at minus culpa et.
  </p>
    </Col>
  <Col sm={12} md={2}>
  <h3>Links</h3>
  <div className='d-flex flex-column'>
<Link style={{textDecoration:'none'}} to={'./'}>Landing</Link>
<Link style={{textDecoration:'none'}} to={'./home'}>Home</Link>
<Link style={{textDecoration:'none'}} to={'./his'}>watch history</Link>


  </div>
  
  </Col>
  <Col sm={12} md={5}>
  <h3>Feedback</h3>
  <textarea name=''id='' className='form-control'></textarea>
  <button className='btn btn-info mt-4'>send</button>
  
  
  </Col>


</Row>
<h6 style={{textAlign:'center'}}>Media player &copy;2024 </h6>
   </div>
   
   
   </>
  )
}

export default Footer
