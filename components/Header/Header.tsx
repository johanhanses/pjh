import Link from 'next/link'
import React, { useRef } from 'react'
import { Button } from '../Button'
import { Hamburger } from './Hamburger'
import { LogInOutButton } from './LogInOutButton'
import { ThemeToggler } from './ThemeToggler'

export const Header = ({
  title,
  description
}: {
  title: String
  description: string
}) => {
  const navRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    navRef.current?.classList.toggle('hidden')
    navRef.current?.classList.toggle('mr-6')
  }

  return (
    <header className="w-full flex items-center py-6 md:py-24">
      <Link href="/">
        <a className="focus:outline-none focus:ring focus:ring-themeOrange dark:focus:ring-themeGreen">
          <h1 className="text-3xl md:text-6xl font-bold text-black dark:text-white">
            {title}
          </h1>
          <p className="text-xs md:text-lg font-semibold">{description}</p>
        </a>
      </Link>
      <button className="md:hidden ml-auto mr-4" onClick={toggleMenu}>
        <Hamburger />
      </button>
      <div
        className="md:flex flex-col md:flex-row md:items-center text-xl md:space-x-6 hidden absolute md:static top-24 left-6 right-6 rounded-lg md:rounded-none border md:border-none bg-white dark:bg-black  text-right p-6 md:p-0 space-y-6 md:space-y-0 ml-auto mr-6"
        ref={navRef}
      >
        <LogInOutButton />
        {/* <Button
          type="link"
          passedHref="/posts"
          title="Posts"
          variant="ghost"
          additionalClasses="block md:inline"
        /> */}
        <Button
          type="link"
          passedHref="/cv"
          title="CV"
          variant="ghost"
          additionalClasses="block md:inline"
        />
      </div>
      <ThemeToggler />
    </header>
  )
}
