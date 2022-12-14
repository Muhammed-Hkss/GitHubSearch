import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetUserStarred } from '../../config'

import StarsItem from './StarsItem/StarsItem'

const Stars = () => {
  const [starred , setStarred] = useState('')
  const { login } = useParams()

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
  }, [login])


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



