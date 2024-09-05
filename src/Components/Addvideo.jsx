import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import{addvideos} from '../Services/Allapis'
import { toast } from 'react-toastify';
function Addvideo({response}) {
    const [show, setShow] = useState(false);

    const [video,setVideo]=useState({
      videoId:"",title:"",imageUrl:"",videoUrl:""
    })

const handleUpload= async()=>{
  console.log(video);
  const {videoId,title,imageUrl,videoUrl}=video
  if ( !videoId || !title || !imageUrl || !videoUrl){
    // alert("please enter valid input!!")
    toast.warning('please enter valid input')
  }
  else{
    try{
      const vurl=videoUrl.split("v=")[1]
      const eurl=`https://www.youtube.com/embed/${vurl}?si=pc4667w&autoplay=1`
      video.videoUrl=eurl
        const res=await addvideos(video)
        console.log(res);
        if(res.status==201){
          // alert("upload successfully")
          toast.success("upload successfull")
  handleClose()
  response(res)
        }
        else{
          // alert("upload failed")
          toast.error("upload failed!!")
        }
    }
   catch(err){
    console.log(err);
    // alert("upload failed")
    toast.error("upload failed!!")

    
   }
  }
}

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
<>
<button className='btn' onClick={handleShow}>
<i className="fa-solid fa-square-plus" style={{color: "#FFD43B",}} />
</button>

<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingId" label="Video Id" className="mb-3">
        <Form.Control type="number" placeholder="1" onChange={(e)=>{setVideo({...video,videoId:e.target.value})}} />
      </FloatingLabel>
      <FloatingLabel controlId="Vtitle" label="Video Title" className="mb-3">
        <Form.Control type="text" placeholder="Password" onChange={(e)=>{setVideo({...video,title:e.target.value})}} />
      </FloatingLabel>
      <FloatingLabel controlId="imgUrl" label="Video Image Url" className="mb-3">
        <Form.Control type="text" placeholder="url" onChange={(e)=>{setVideo({...video,imageUrl:e.target.value})}} />
      </FloatingLabel><FloatingLabel controlId="Vurl" label="youtube video Url" className="mb-3">
        <Form.Control type="text" placeholder="url" onChange={(e)=>{setVideo({...video,videoUrl:e.target.value})}} />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
</>

)
}

export default Addvideo