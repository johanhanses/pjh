import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun } from './Sun'
import { Moon } from './Moon'

export const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      type="button"
      name="Change Theme"
      aria-label="Change Theme"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="hover:text-themeOrange dark:hover:text-themeGreen pb-1 focus:outline-none focus:ring focus:ring-themeOrange dark:focus:ring-themeGreen"
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  )
}
