import React from 'react'
import cls from './Loader.module.scss'

const Loading = () => {
  return (
    <div className={cls['lds-ring']}><div></div><div></div><div></div><div></div></div>
  )
}

export default Loading