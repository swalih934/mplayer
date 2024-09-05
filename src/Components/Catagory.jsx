import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addcategory } from '../Services/Allapis';
import Categorylist from './Categorylist';

function Catagory() {
  const [show, setShow] = useState(false);

  const [category, setCategory] = useState({
    categoryId: "", title: "", videos: []
  })
  const handleCategory = async () => {
    console.log(category);
    const { categoryId, title } = category
    if (!categoryId || !title) {
      toast.warning("enter valid inputs!!")
    }
    else {
      const result = await addcategory(category)
      console.log(result);
      if (result.status == 201) {
        toast.success("category added")
        handleClose()
        setCategory({
          categoryId: "", title: "", videos: []
        })
      }
      else {
        toast.error("category adding failed!!")
      }
    }

  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='d-grid'>

        <button onClick={handleShow} className='btn btn-success' >Add catogory</button>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FloatingLabel controlId="floatingId" label="Catogery Id" className="mb-3">
              <Form.Control type="number" placeholder="1" onChange={(e) => { setCategory({ ...category, categoryId: e.target.value }) }} />
            </FloatingLabel>
            <FloatingLabel controlId="Vtitle" label="Catogery Title" className="mb-3">
              <Form.Control type="text" placeholder="title" onChange={(e) => { setCategory({ ...category, title: e.target.value }) }} />
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button onClick={handleCategory} variant="primary">Add</Button>
          </Modal.Footer>
        </Modal>
        <Categorylist/>
      



    </>


  )
}

export default Catagory