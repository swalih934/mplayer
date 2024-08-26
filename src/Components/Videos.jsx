import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Videocard from './Videocard'
function Videos() {
  return (
<>
<div className='border border-3 shadow p-5 mb-3'>

<Row>
    <Col>
    <Videocard/>
    </Col>
    
</Row>

</div>
</>

)
}

export default Videos