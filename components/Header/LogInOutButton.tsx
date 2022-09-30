import { signOut, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

export const LogInOutButton = () => {
  const { status } = useSession()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if (status === 'authenticated') {
    return (
      <button
        onClick={() => signOut()}
        className="focus:outline-none focus:ring focus:ring-themeOrange dark:focus:ring-themeGreen md:py-1 md:px-4 hover:bg-themeOrange hover:bg-opacity-10 dark:hover:bg-themeGreen dark:hover:bg-opacity-20 rounded-lg transition-colors duration-300 md:inline"
      >
        Logout
      </button>
    )
  }
  return null
  // return (
  //   <div>
  //     <button
  //       onClick={() => signIn()}
  //       className="focus:outline-none focus:ring focus:ring-themeOrange dark:focus:ring-themeGreen py-1 px-4 hover:bg-themeOrange hover:bg-opacity-10 dark:hover:bg-themeGreen dark:hover:bg-opacity-20 rounded-lg transition-colors duration-300"
  //     >
  //       Login
  //     </button>
  //   </div>
  // )
}
