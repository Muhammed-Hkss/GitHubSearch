import React from 'react'
import cls from './StarsItem.module.scss'
import { AiOutlineDown } from 'react-icons/ai'
import { HiOutlineStar } from 'react-icons/hi'
import { Link } from 'react-router-dom'


const StarsItem = ({item}) => {
  const [open , setOpen] = React.useState(false)

  return (
    <>
      <div className={cls.stars_data}>
        <div key={item.id} >

          

          <div key={item.id} className={cls.name_stars_data}>

            <p>{item.owner.login} / {item.name}</p>

            <div className={cls.dropdown_menu_data}>
              <div >
                <Link className={`${cls.dropdown_menu} ${open? `${cls.active}` : `${cls.inactive}`}`} to={`/users/${item.owner.login}`}>
                  <img className={cls.image} src={item.owner.avatar_url} alt="" />
                  <p>{item.owner.login}</p>
                </Link>
              </div>
              <AiOutlineDown
                onClick={() => {setOpen(!open)}}
                style={{cursor:'pointer'}}
              />
            </div>

          </div>
          

          <div className={cls.stars_number_data} style={{display:'flex'}}>
            <HiOutlineStar style={{cursor:'pointer'}} />
            <p>{item.stargazers_count}</p>  
          </div>
          
          
        </div>
      </div>
    </>
  )
}

export default StarsItem