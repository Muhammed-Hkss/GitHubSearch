import React, { useEffect, useState } from 'react'
import { useParams , Link } from 'react-router-dom'
import { GetUserFollowers } from '../../config'
import cls from './Followers.module.scss'

const Followers = () => {
  const [followersData , setFollowersData] = useState('')
  const {login} = useParams()

  useEffect(() => {
    GetUserFollowers(login).then(r => {
      setFollowersData(r.data)
    })
  } , [login])
  return (
    <div className={cls.container}>
      
        <div className={cls.repositories_data}>
          {
            followersData && followersData.map(item => {
              return(
                <div className={cls.followers_data} key={item.id}>
                  <Link className={cls.img_name_data} to={`/users/${item.login}`}>
                    <img className={cls.followers_img} src={item.avatar_url} alt="" />
                    <p className={cls.followers_name}>{item.login}</p>
                  </Link>
                  <button
                    style={{
                      padding:'5px 30px',
                      backgroundColor:'aliceblue',
                      border:'1px solid gray',
                      borderRadius:'8px',
                      cursor:'pointer',
                    }}
                  >followers</button>
                </div>
              )
            })
          }
        </div>

    </div>
  )
}

export default Followers