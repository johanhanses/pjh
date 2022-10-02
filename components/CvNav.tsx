import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export const CvNav = () => {
  const router = useRouter()

  return (
    <nav className="block space-x-4 text pb-12 text-xl font-bold">
      <Link href="/cv">
        <a
          className={
            router.pathname == '/cv'
              ? 'text-themeOrange dark:text-themeGreen'
              : ''
          }
        >
          CV
        </a>
      </Link>
      <Link href="/cover-letter">
        <a
          className={
            router.pathname == '/cover-letter'
              ? 'text-themeOrange dark:text-themeGreen'
              : ''
          }
        >
          Cover letter
        </a>
      </Link>
    </nav>
  )
}
