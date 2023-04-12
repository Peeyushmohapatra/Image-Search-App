import React, { useContext } from 'react'
import { Context } from '../../App'
import "./display.css"

const Display = () => {
    const {api} = useContext(Context);
    
  return (
    <div className='displayContainer'>
        {api.length > 0 ? <>
            {
                api.map((ele) => {
                    return (
                        <div className='imageContainer'>
                        <img src={ele.cover_photo.urls.regular} alt="" />
                            <div className="blackEffect"></div>
                            <p className='p1'>Name: {ele.cover_photo.user.name}</p>
                            <p className='p2'>Updated At: {ele.cover_photo.user.updated_at}</p>
                        </div>
                    )
                })
            }
        </> : <h1>Invalid Input !!!!</h1>}
    </div>
  )
}

export default Display