import React, { useState , useEffect } from 'react'
import { GetUserRepository } from '../../config'
import Loading from '../../copanents/Loading'
import cls from './Repository.module.scss'

const RepositoriesMe = () => {
  const [reposData , setreposData] = useState('')


  useEffect(() => {
    GetUserRepository('Muhammed-Hkss').then(r => {
      const newData = Object.entries(r.data).map(([id, item]) => {
        return {
          id,
          ...item
        }
      })
      setreposData(newData)
    })
  } , [])

  

  return (
    <div className={cls.repositories_data}>
        {
          reposData === '' ? <div className={cls.loading}><Loading /></div> : reposData && reposData.map(item => (
            <div className={cls.repositories} key={item.id}>
              <a href={item.html_url}>{item.name}</a>
              <p>Public</p>
            </div>
          ))
        }
    </div>
  )
}

export default RepositoriesMe