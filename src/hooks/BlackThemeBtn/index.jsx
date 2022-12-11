import React from 'react'
import useDarkMode from '../useDarkMode'
import cls from './BlackThemeBtn.module.scss'
// import { BsMoon, BsSun } from "react-icons/bs"

const BlackThemeBtn = () => {
  const [isDarkMode, setDarkMode] = useDarkMode()

  return (
    <div>
      <div className={cls.wrapper}>
        <input 
        onClick={() => setDarkMode(!isDarkMode)} 
        type="checkbox" name="checkbox" className={cls.switch} />
      </div>

      {/* <button className="toggle_btn" onClick={() => setDarkMode(!isDarkMode)}>
        {isDarkMode ? (
          <BsSun color="#ff0" size="24" title="Switch to light mode" />
        ) : (
          <BsMoon size="24" title="Switch to dark mode" />
        )}
      </button> */}
 
    </div>
  )
}

export default BlackThemeBtn
