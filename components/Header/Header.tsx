import Link from 'next/link'
import React from 'react'
import { Button } from '../Button'
import { LogInOutButton } from './LogInOutButton'
import { ThemeToggler } from './ThemeToggler'

export const Header = ({
  title,
  description
}: {
  title: String
  description: string
}) => {
  return (
    <header className="w-full flex items-center justify-between py-12">
      <Link href="/">
        <a className="focus:outline-none focus:ring focus:ring-themeOrange dark:focus:ring-themeGreen">
          <h1 className="text-6xl font-bold text-black dark:text-white">
            {title}
          </h1>
          <p className="text-lg font-semibold">{description}</p>
        </a>
      </Link>

      <nav className="flex items-center text-xl space-x-6">
        <LogInOutButton />
        <Button type="link" passedHref="/posts" title="Posts" variant="ghost" />
        <Button type="link" passedHref="/cv" title="CV" variant="ghost" />
        <ThemeToggler />
      </nav>
    </header>
  )
}
