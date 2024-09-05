import React, { useEffect, useState } from 'react'
import { getCategories, deletecategory } from '../Services/Allapis'
import { updateCategory } from '../Services/Allapis'
import { toast } from 'react-toastify'
import Videocard from './Videocard'
function Categorylist({ response }) {

    const [Categorylist, setCategorylist] = useState([])
    useEffect(() => {
        getData()
    }, [response])
    const getData = async () => {
        const result = await getCategories()
        console.log(result);
        if (result.status == 200) {
            setCategorylist(result.data)
            getData()        //extra fitting
        }
    }
    const deleteCat = async (id) => {
        const result = await deletecategory(id)
        console.log(result);
        if (result.status == 200) {
            getData()
        }

    }
    const dropHandler = async (e, category) => {
        console.log("dropped");
        const vid = JSON.parse(e.dataTransfer.getData("video"));
        category.videos.push(vid)
        const result = await updateCategory(category.id, category)
        console.log(result);
        if (result.status == 200) {
            toast.success(`${vid.title} video added to ${category.title}`)
            getData()
        }
        else {
            toast.error("video-catogry  adding failed!!")
        }

    }
    const dragOverHandler = (e) => {
        console.log("dragging over");
        e.preventDefault()

    }

    return (
        <>
            <div className='container-fluid border border-3 border-light p-2 mt-3'>
                {
                    Categorylist.length > 0 ?
                        <div>
                            {
                                Categorylist.map(item => (
                                    <div className='border m-1'>
                                        <div className='m-2 p-3 border mb-3 d-flex justify-content-between' onDragOver={(e) => { dragOverHandler(e) }} onDrop={(e) => { dropHandler(e, item) }} >
                                            <h3>{item.title}</h3>
                                            <button className='btn' onClick={() => { deleteCat(item.id) }}>
                                                <i className="fa-solid fa-trash" style={{ color: "#c60606", }} />

                                            </button>
                                        </div>
                                        <div className='border border-light'>
                                            {
                                                item?.videos?.length>0 &&
                                                <>
                                                {item?.videos?.map(vid=>(
                                                    <Videocard video={vid} cat={true}/>
                                                    
                                                ))}
                                                </>


                                            }

                                        </div>
                                    </div>


                                ))
                            }
                        </div>
                        :
                        <h5>No categories</h5>
                }
            </div>
        </>
    )
}

export default Categorylist