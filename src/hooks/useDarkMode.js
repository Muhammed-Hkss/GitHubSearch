import { useEffect, useState } from "react"

export default () => {
  const key = "isDarkMode"
  const [isDark, setIsDark] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : undefined
    } catch (error) {
      return false
    }
  })


  const darkModeEnabled =
    typeof isDark !== "undefined"
      ? isDark
      : window.matchMedia("(prefers-color-scheme: dark)").matches
  useEffect(() => {
    const className = "dark"
    if (darkModeEnabled) {
      window.document.body.classList.add(className)
    } else {
      window.document.body.classList.remove(className)
    }
    try {
      window.localStorage.setItem(key, darkModeEnabled)
    } catch (e) {
      console.error("Error in setting preference")
    }
  }, [darkModeEnabled])

  return [darkModeEnabled, setIsDark]
}