import React from 'react'

function History() {
  return (
   <>
   <div className='p-5'>
    <h1>Watch history</h1>
<table className='table table-border'>
  <thead>
    <tr>
      <th>Video Id</th>
      <th>Title</th>
      <th>Video Url</th>
      <th>date and time</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Heeriye</td>
      <td>https://www.youtube.com/watch/embed/RLzC55ai0eo?si=D7w2QMGZzoKWv6aK</td>
      <td>2024-08-24</td>
<td><button><i className="fa-solid fa-trash" style={{color: "#df0c36",}} /></button></td>
    </tr>

  </tbody>
</table>


   </div>
   
   </>
  )
}

export default History
