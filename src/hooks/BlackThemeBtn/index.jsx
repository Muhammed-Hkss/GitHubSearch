import React from 'react'
import cls from './BlackThemeBtn.module.scss'

const BlackThemeBtn = ({themeToggler}) => {
  return (
    <div>
      <div className={cls.wrapper}>
        <input onClick={() => themeToggler()} type="checkbox" name="checkbox" className={cls.switch} />
      </div>
 
    </div>
  )
}

export default BlackThemeBtn
