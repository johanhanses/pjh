import { signIn, signOut, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

export const LogInOutButton = () => {
  const { data: session, status } = useSession()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if (status === 'authenticated') {
    return (
      <div>
        <button
          onClick={() => signOut()}
          className="focus:outline-none focus:ring focus:ring-themeOrange dark:focus:ring-themeGreen py-1 px-4 hover:bg-themeOrange hover:bg-opacity-10 dark:hover:bg-themeGreen dark:hover:bg-opacity-20 rounded-lg transition-colors duration-300"
        >
          Logout
        </button>
      </div>
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
