import React,{useState,useEffect} from 'react'
import { deleteHistory, getHistory } from '../Services/Allapis'
function History() {
const [history,setHistory]=useState([])
useEffect(()=>{
  getData()
},[])

const getData=async ()=>{
  const result =await getHistory()
  if(result.status==200){
    getData()
    console.log(result.data);
    setHistory(result.data)
    
  }
  else{
    console.log(result);
    
  }
}
const delHistory=async(id)=>{
  const result=await deleteHistory(id)
  console.log(result);
  if(result==200){
    getData()
  }
  
}
  return (
   <>
   <div className='p-5'>
    <h1>Watch history</h1>
    {
      history.length>0 ?
      <table className='table table-bordered'>
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
    {
      history.map(item=>(
        <tr>
        <td>{item.videoId}</td>
        <td>{item.title}</td>
        <td>{item.url}</td>
        <td>{item.datetime}</td>
  <td><button onClick={()=>delHistory(item.id)}>
    <i className="fa-solid fa-trash"  style={{color: "#df0c36",}} />
    </button></td>
      </tr>
      ))
    }
   

  </tbody>
</table>
:
<h2>no history uploaded</h2>
    }



   </div>
   
   </>
  )
}

export default History
