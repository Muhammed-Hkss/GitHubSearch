import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GetUserRepository } from '../../config'
import cls from './Repository.module.scss'
import Loading from '../../copanents/Loading'
import Pagination from './pagination/Pagination'

const Repositories = () => {
  const [reposData , setReposData] = useState('')
  const [data , setData] = useState(reposData)
  const [page, setPage] = React.useState(1)
	const [base, setBase] = React.useState(reposData)
  const [reposLanguage , setReposLanguage] = useState('')
  const [input , setInput] = React.useState('')
  const PAGE_SIZE = 6
	const TOTAL_PAGE = Math.ceil(data?.length / PAGE_SIZE)
  const {login} = useParams()



  const debouncedSearchTerm = useDebounce(input, 500);


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




  React.useEffect(() => {
    setData([])
    data && data.filter(value => {
      if(value.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()))
      { 
        setData(output => [...output, value])
      }
    })
  }, [debouncedSearchTerm ])


  const filterResult = (catItem) => {
    if(catItem === 'All') {
      setData(reposData)
    } else {
      const result =  reposData && reposData.filter((curData) => {
        return curData.language === catItem
      })
      setData(result)
    }
  }
  
  const uniqueIds = [];
  
  const uniqueEmployees = reposLanguage && reposLanguage.filter(element => {
    const isDuplicate = uniqueIds.includes(element.language);
  
    if (!isDuplicate) {
      uniqueIds.push(element.language);
  
      return true;
    }
  
    return false;
  });
  
	

  useEffect(() => {
    GetUserRepository(login).then(r => {
      setReposLanguage(r.data)
    })
  } , []) 



  useEffect(() => {
    GetUserRepository(login).then(r => {
      const newData = Object.entries(r.data).map(([id, item]) => {
        return {
          id,
          ...item
        }
      })
      setReposData(newData)
      setData(newData)
    })
  } , [])

	useEffect(() => {
		update()
	}, [page, data ])


function update() {
		const base = data?.slice(
			(page - 1) * PAGE_SIZE,
			(page - 1) * PAGE_SIZE + PAGE_SIZE
		)
		setBase(base)
	}

  return (
    <>


     
          




      <div className={cls.search_filter_data}>
        <input 
          className={cls.search__input}
            onChange={e => setInput(e.target.value)}
            type="text" 
            placeholder="Search"
        />
        <select className={cls.filter_select} onChange={(e => filterResult(e.target.value))}>
          <option>Language</option>
          <option>All</option>
          {uniqueEmployees && uniqueEmployees.map(item => (

          item.language === null ? '' : 
          <option
            key={item.id} 
            className={cls.filter_button}
            onClick={() => filterResult(`${item.language}`)} 
          >
            {item.language}
          </option>
          ))}
        </select>

      </div>


      <div className={cls.repositories_data}> 

        {
          reposData === '' ? <div className={cls.loading}><Loading /></div> :
          base && base.map((item) => (
            <div className={cls.repositories} key={item.id}>
              <a href={item.html_url}>{item.name}</a>
              <p>Public</p>
              <div style={{display:'flex' , justifyContent:'center'}}>
                {
                  item.language === 'JavaScript' ? 
                  <div style={{display:'flex' , alignItems:'center' , gap:'20px'}}>
                    <p style={{ backgroundColor:'yellow' , width:'10px' , height:'10px' , borderRadius:'50%' }}></p>
                    <p>{item.language}</p>
                  </div> : ''
                }
                {
                  item.language === 'TypeScript' ? 
                  <div style={{display:'flex' , alignItems:'center' , gap:'20px'}}>
                    <p style={{ backgroundColor:'cornflowerblue' , width:'10px' , height:'10px' , borderRadius:'50%' }}></p>
                    <p>{item.language}</p>
                  </div> : ''
                }
                {
                  item.language === 'CSS' ? 
                  <div style={{display:'flex' , alignItems:'center' , gap:'20px'}}>
                    <p style={{ backgroundColor:'indigo' , width:'10px' , height:'10px' , borderRadius:'50%' }}></p>
                    <p>{item.language}</p>
                  </div> : ''
                }
                {
                  item.language === 'SCSS' ? 
                  <div style={{display:'flex' , alignItems:'center' , gap:'20px'}}>
                    <p style={{ backgroundColor:'darkmagenta' , width:'10px' , height:'10px' , borderRadius:'50%' }}></p>
                    <p>{item.language}</p>
                  </div> : ''
                }
              </div>
            </div>
          ))
        }

      </div>


      <div className={cls.next_prev_btn_data}>
        <div>
          <Pagination TOTAL_PAGE={TOTAL_PAGE} page={page} setPage={setPage} />
        </div>
      </div>
    </>
  )
}

export default Repositories









