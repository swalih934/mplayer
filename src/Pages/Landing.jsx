import React from 'react'
import { Row, Col, CardBody, CardTitle, CardText, Card, CardImg } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Landing() {
  return (
    <>
      <div className="container-fluid mb-5 d-flex align-items-center " style={{height:'80vh'}}>
        <Row>
          <Col className='p-5' sm={12} md={6}>
            <h2>
              <i className="fa-solid fa-box fa-fade text-info"></i>

              Media player 2024
            </h2>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt non veniam, dicta earum aliquam harum quos accusamus numquam voluptas eos tempora, impedit vitae assumenda alias dolor laudantium error id.

            </p>
            <div className='d-grid'>
              <Link to={'./home'} className='btn btn-success'>Let's Go</Link>
            </div>

          </Col>
          <Col className='py-4' sm={12} md={6}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCi8ghWcpeamY6-A3FWO11ZfLjQn-5CL6dGvRNzEPnwkKvNT38-n4stYEaKbDhmaAxUmE&usqp=CAU" className='img-fluid rounded' alt="" />

          </Col>


        </Row>



      </div>
<div className="container-fluid mt-5">
  <h3 className='my-3 text-center'>Features</h3>
  <div className='p-4 d-flex justify-content-around'>
<Card style={{width:'18rem'}}>
  <Card.Img variant="top" height={'200px'}src='https://i.gifer.com/fyFl.gif' />
    <CardBody>
      <CardTitle>Upload youtube Videos</CardTitle>
      <CardText>
        some quik examples rect can build on the card titke and make up the bulk of the card content
      </CardText>
    </CardBody>

    </Card>
    <Card style={{width:'18rem'}}>
  <Card.Img variant="top" height={'200px'}src='https://cdn.dribbble.com/users/77098/screenshots/2485682/main-icons_2.gif' />
    <CardBody>
      <CardTitle>Add catogeries</CardTitle>
      <CardText>
        some quik examples rect can build on the card titke and make up the bulk of the card content
      </CardText>
    </CardBody>

    </Card>
    <Card style={{width:'18rem'}}>
  <Card.Img variant="top" height={'200px'}src='https://cdn.dribbble.com/users/437703/screenshots/3458035/aprli20search-gif2.gif' />
    <CardBody>
      <CardTitle>watch History</CardTitle>
      <CardText>
        some quik examples rect can build on the card titke and make up the bulk of the card content
      </CardText>
    </CardBody>

    </Card>
  </div>
</div>


<div className='p-5'>
  <Row>
    <Col sm={12} md={7}>
    <h4>Simple and Faster</h4>
    <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quo, id tempora distinctio dolore rerum aspernatur illum sed aut fugit! Amet vero et rerum eveniet deserunt perspiciatis pariatur vitae maiores.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus distinctio nesciunt quas dolor, asperiores quibusdam, hic, ab accusamus sequi a eaque totam aut recusandae minima incidunt repudiandae laborum libero excepturi?

    </p>
    </Col>
    <Col sm={12} md={5}>
    <iframe width="400" height="315" src="https://www.youtube.com/embed/SqcY0GlETPk?si=cG9Rb_-9Wug3qAVs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </Col>
    </Row>
</div>












    </>
  )
}

export default Landing
