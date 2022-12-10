import React, { useEffect, useState } from "react";
import {SerachUserQueri} from '../../config/index'
import cls from './Navbar.module.scss'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from "react-router-dom";
import { MainUtils } from "../../utils/Utils";
import BlackThemeBtn from "../../hooks/BlackThemeBtn";

const Navbar = ({themeToggler}) => {
  const [data, setData] = useState('');
  const [username, setUsername] = useState("");
  const [open , setOpen] = React.useState(false)
  
  const debouncedSearchTerm = useDebounce(username, 400);


  function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    
  
    useEffect(() => {
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);
        return () => {
          clearTimeout(handler);
        };
      },[value, delay]);
    return debouncedValue;
  }


  useEffect(() => {
    if(debouncedSearchTerm.length ){
      SerachUserQueri(debouncedSearchTerm).then(res => {      
        setData(res.data.items)
    })
    }
  }, [debouncedSearchTerm])

  

  const clearInput = () => {
    setUsername('')
  };




  return (
    <>

      <div className={cls.container}>

        <div className={cls.row}>
          <BsGithub />
          <div className={cls.search_data}>
            <input
              className={cls.search_input}
              type="text" 
              placeholder="Search"
              value={username}
              onChange={e => setUsername(e.target.value)} 
            />
          </div>


          <div className={cls.dark_mode_btn}>
            <BlackThemeBtn themeToggler={themeToggler} />
          </div>


          <div onClick={() => {setOpen(!open)}} className={cls.menu_data}>
            <AiOutlineMenu />
          </div>

        </div>

        <div className={cls.search_result_data}>
            <ul>

              {
                debouncedSearchTerm.length < 3 ? 
                '' :  
                
                data.length < 3 ?
                
                data && data.map(item => {
                  return(
                    <li key={item.id}>
                      <Link onClick={clearInput} to={`/users/${item.login}`}>{item.login}</Link> 
                    </li>
                  )
                }) : 
                
                data && data.map(item => {
                  return(
                    <li key={item.id}>
                      <Link onClick={clearInput} to={`/users/${item.login}`}>{item.login}</Link> 
                    </li>
                  )
                })
              }
            </ul>
        </div>

        <div className={cls.menu_none}>
          <div className={`${cls.dropdown_menu} ${open? `${cls.active}` : `${cls.inactive}`}`}>
            
            
            
            
            <ul className={cls.ORPP_list}>
              <div className={cls.dark_mode_menu_btn}>
                <BlackThemeBtn themeToggler={themeToggler} />
              </div>
              {
                MainUtils.map(item => (
                  <li key={item.id}>
                    <Link  to={item.path}>{item.icons} {item.title}</Link>
                  </li>  
                ))
              }
            </ul>
          </div>
        </div>

      </div>
    </>
  );
};
export default Navbar;




