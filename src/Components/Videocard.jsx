import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {toast } from 'react-toastify'
import { deleteVideo ,addHistory} from '../Services/Allapis';
function Videocard({video,response,cat}) {
    const [show, setShow] = useState(false);

    const handleDelete=async()=>{
      const res=await deleteVideo(video.id)
      console.log(res);
      if(res.status==200){
        toast.success("video deleated")
        response(res)
      }
      else{
        toast.error("Deletion failed!!")
      }
    }

    const draghandler=(e)=>{
      console.log(e);
      console.log(video);
      e.dataTransfer.setData("video", JSON.stringify(video))
      
      
    }

    const handleClose = () => setShow(false);
    const handleShow = async() =>{
       setShow(true)
const dt=new Date()
const data={videoId:video.videoId,title:video.title,url:video.videoUrl,datetime:dt}
console.log(data);
const result=await addHistory(data)
console.log(result);


    };
  return (


<>
<Card className='mb-4' style={ cat?{width:"100%"}:{ width: '18rem' }} onDragStart={(e)=>{draghandler(e)}} draggable>
      <Card.Img style={{cursor:"pointer"}} onClick={handleShow} variant="top" src={video?.imageUrl} />
      <Card.Body>
        <Card.Title>{video?.title}</Card.Title>
      {
        !cat &&
        <Button onClick={handleDelete} variant="btn">
        <i className="fa-solid fa-trash" style={{color: "#c60606",}} />
        </Button>
      }
       
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{video?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={video?.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

</>)
}

export default Videocard