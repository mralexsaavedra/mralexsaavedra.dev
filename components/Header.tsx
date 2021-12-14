import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import NextLink from 'next/link'
import cn from 'classnames'

import MobileMenu from 'components/MobileMenu'
import Moon from 'components/Icons/Moon'
import Sunny from 'components/Icons/Sunny'

function NavItem({ href, text }) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400',
          'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
        )}
      >
        <span className='capsize'>{text}</span>
      </a>
    </NextLink>
  )
}

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  return (
    <div className='flex flex-col justify-center px-8'>
      <nav className='flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-gray-50  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100'>
        <a href='#skip' className='skip-nav'>
          Ir al contenido
        </a>
        <div className='ml-[-0.60rem]'>
          <MobileMenu />
          <NavItem href='/' text='Inicio' />
          <NavItem href='/about' text='Sobre mí' />
          {/* <NavItem href='/blog' text='Blog' /> */}
        </div>
        <button
          aria-label='Toggle Dark Mode'
          type='button'
          className='w-8 h-8 flex items-center justify-center transition-all'
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            resolvedTheme === 'dark'
              ? <Sunny />
              : <Moon />
          )}
        </button>
      </nav>
    </div>
  )
}
