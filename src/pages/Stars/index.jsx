import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetUserStarred } from '../../config'
// import { AiOutlineDown } from 'react-icons/ai'
// import { HiOutlineStar } from 'react-icons/hi'

import StarsItem from './StarsItem/StarsItem'

const Stars = () => {
  const [starred , setStarred] = useState('')
  const { login } = useParams()

  console.log(starred.length);

  useEffect(() => {
    GetUserStarred(login).then(r => {
      const newData = Object.entries(r.data).map(([id, item]) => {
        return {
          id,
          ...item
        }
      })
      setStarred(newData)
    })
  }, [])


  return (
    <>
      <div>
        {
          starred.length === 0 ? <p> list not found </p> : starred.map(item => (
            <StarsItem key={item.id} item={item}/>
          ))
          
        }
        
        
      </div>
    </>
  )
}



export default Stars



