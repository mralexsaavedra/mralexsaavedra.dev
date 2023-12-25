import { useCallback, useEffect, useState } from 'react'
import { THEME_STORAGE_KEY, Theme } from '../lib/theme'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem(THEME_STORAGE_KEY) ?? Theme.LIGHT
  )

  const handleClick = useCallback(
    () =>
      setTheme(
        localStorage.getItem(THEME_STORAGE_KEY) === Theme.LIGHT
          ? Theme.DARK
          : Theme.LIGHT
      ),
    []
  )

  useEffect(() => {
    if (theme === Theme.DARK) {
      document.documentElement.classList.add(Theme.DARK)
    } else {
      document.documentElement.classList.remove(Theme.DARK)
    }
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  return (
    <button
      aria-label='Toggle Dark Mode'
      type='button'
      className='w-8 h-8 flex items-center justify-center transition-all'
      onClick={handleClick}
    >
      {theme === Theme.LIGHT ? '🌚' : '🌞'}
    </button>
  )
}
