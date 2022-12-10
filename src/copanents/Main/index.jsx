import React, { useEffect, useState } from 'react'
import { UserMoreData } from '../../config'
import Navbar from '../Navbar'
import {AiOutlineTeam} from 'react-icons/ai'
import cls from './Main.module.scss'
import { Link, Outlet } from 'react-router-dom'
import { MainUtils } from '../../utils/Utils'

const Main = ({themeToggler}) => {
  const [userInfo , setUserInfo] = useState('')

  useEffect(() => {
    UserMoreData('Muhammed-Hkss').then(r => {
      setUserInfo(r.data)
    })  
  } , []) 

  return (
    <>
      <div> 
        <Navbar themeToggler={themeToggler}/>
      </div>


      <div className={cls.container}>
        <ul className={cls.ORPP_list}>
          {
            MainUtils.map(item => (
              <li key={item.id}>
                <Link  to={item.path}>{item.icons} {item.title}</Link>
              </li>  
            ))
          }
        </ul>
        
        <div className={cls.profie_data}>
          <div className={cls.image_data}>
            <img className={cls.image} src={userInfo.avatar_url} alt="" />
            <div className={cls.name_text_data}>
              <h2>{userInfo.name}</h2>
              <p>{userInfo.login}</p>
              <button
                style={{
                  padding:'5px 70px',
                  backgroundColor:'aliceblue',
                  border:'1px solid gray',
                  borderRadius:'8px',
                  cursor:'pointer',
                }}
              >Edit profile</button>
            </div>
            <br />
            <div >
              <AiOutlineTeam/>
              <Link to={`/users/${userInfo.login}/followers`}> {userInfo.followers} followers</Link> 
              <Link to={`/users/${userInfo.login}/following`}> {userInfo.following} following</Link>
            </div>
          </div>
          
          
          <div className={cls.page_data}>

            <Outlet />

          </div>

        </div>
      </div>
    </>
  )
}

export default Main