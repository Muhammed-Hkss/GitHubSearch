import React from 'react'
import { AiOutlineArrowRight , AiOutlineArrowLeft } from 'react-icons/ai';
import cs from './pagination.module.scss'

const Pagination = ({TOTAL_PAGE , page , setPage}) => {


  function nextPagination(){
		if(page !== TOTAL_PAGE){
			setPage(page + 1)
		}else {
			setPage(1)
		}
	}

	function prevPagination(){
		if(page !== 1){
			setPage(page - 1)
		}else {
			setPage(TOTAL_PAGE)
		}
	}

  return (
    <div className={cs.pagination}>
      <button
				className={cs.btn}
				onClick={() => prevPagination()}
        disabled={page === 1}
			>
				<AiOutlineArrowLeft/>
			</button>

			<ul className={cs.list}>
				{
          // 
					Array.from({length: TOTAL_PAGE}).map((item , i) => (
						<li 
              className={page === i + 1 ? `${cs.li} ${cs.active}` : cs.li}
							onClick={() => setPage(i + 1)}
							key={i}
						>
							{i + 1}
						</li>
					))
				}
			</ul>

			<button 
				className={cs.btn}
				onClick={() => nextPagination()}
        disabled={page === TOTAL_PAGE}
			>
				<AiOutlineArrowRight/>
			</button>
    </div>
  )
}

export default Pagination