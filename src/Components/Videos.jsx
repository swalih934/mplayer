import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Videocard from './Videocard'
import { getVideos } from '../Services/Allapis'
function Videos({add}) {

  const [videos, setVideo] = useState([])
  const [delResponse,setDelResponse]=useState("")
  useEffect(() => {
    getData()
  }, [add,delResponse])

  const getData = async () => {
    const res = await getVideos()
    console.log(res);
    if (res.status == 200) {
      setVideo(res.data)
    }
    else {
      console.log(res);

    }

  }
  return (
    <>
      <div className='border border-3 shadow p-4 mb-5'>
        {
          videos.length > 0 ?
            <Row>
              {
                videos.map(item => (
                  <Col>
                    <Videocard video={item} response={setDelResponse} />
                  </Col>
                ))
              }


            </Row> :
            <h2 className='text-center text-danger'>no video available</h2>
        }

      </div>
    </>

  )
}

export default Videos