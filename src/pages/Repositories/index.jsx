import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GetUserRepository, GetUserRepositoryPerPage } from '../../config'
import { MdOutlineNavigateNext , MdOutlineNavigateBefore } from 'react-icons/md'
import cls from './Repository.module.scss'
import Loading from '../../copanents/Loading'

const Repositories = () => {
  const [reposData , setreposData] = useState('')
  const [repostPerPage, setRepostPerPage] = React.useState('')
  const [page, setPage] = React.useState(1)
  const {login} = useParams()


  
  const PAGE_SIZE = 6
  const TOTAL_PAGE = Math.ceil(reposData?.length / PAGE_SIZE)


  useEffect(() => {
    GetUserRepository(login).then(r => {
      const newData = Object.entries(r.data).map(([id, item]) => {
        return {
          id,
          ...item
        }
      })
      setreposData(newData)
    })
  } , [])

  useEffect(() => {
    GetUserRepositoryPerPage(login, page).then(r => {
      const newData = Object.entries(r.data).map(([id, item]) => {
        return {
          id,
          ...item
        }
      })
      setRepostPerPage(newData)
    })
  } , [page])

  function nextPagination(){
		if(page !== TOTAL_PAGE){
      console.log(TOTAL_PAGE);
			setPage(page + 1)
		}
	}

	function prevPagination(){
		if(page !== 1){
			setPage(page - 1)
		}
	}



  return (
    <>
      <div className={cls.repositories_data}> 

        {
          repostPerPage === '' ? <div className={cls.loading}><Loading /></div> : repostPerPage && repostPerPage.map(item => {

            return(
              <div className={cls.repositories} key={item.id}>
                <a href={item.html_url}>{item.name}</a>
                <p>Public</p>
                  {/* <p>{item.language}</p> */}
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
            )
          })
        }
      </div>
      <div className={cls.next_prev_btn_data}>
          <button 
            className={cls.prev_btn} 
            onClick={() => prevPagination()}
            disabled={page === 1}
          >
            <MdOutlineNavigateBefore />
            <p>Prev</p>
          </button>


          <button
           className={cls.next_btn}
            onClick={() => nextPagination()}
            disabled={page === TOTAL_PAGE}
            >
            <p>Next</p>
            <MdOutlineNavigateNext />
          </button>
      </div>
    </>
  )
}

export default Repositories