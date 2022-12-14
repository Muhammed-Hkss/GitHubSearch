import React, { useEffect, useState } from 'react'
import { Link , useParams } from 'react-router-dom'
import { GetUserFollowing } from '../../config'
import cls from './Following.module.scss'

const Following = () => {
  const [followingData , setFollowingData] = useState('')
  const {login} = useParams()



  useEffect(() => {
    GetUserFollowing(login).then(r => {
      setFollowingData(r.data)
    })
  } , [login])
  return (
    <div className={cls.container}>

      <div className={cls.profie_data}>
   
        <div className={cls.repositories_data}>
          {
            followingData && followingData.map(item => {
                return(
                  <div className={cls.following_data} key={item.id}>
                    <Link className={cls.img_name_data} to={`/users/${item.login}`}>
                      <img className={cls.following_img} src={item.avatar_url} alt="" />
                      <p className={cls.following_name}>{item.login}</p>
                    </Link>
                    <button
                      style={{
                        padding:'5px 30px',
                        backgroundColor:'aliceblue',
                        border:'1px solid black',
                        borderRadius:'8px',
                        cursor:'pointer',
                      }}
                    >following</button>
                  </div>
                )
            })
          }
        </div>
      </div>
      
    </div>
  )
}

export default Following
