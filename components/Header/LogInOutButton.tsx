import { signIn, signOut, useSession } from 'next-auth/react'

export const LogInOutButton = () => {
  const { data: session, status } = useSession()

  if (status === 'authenticated') {
    return (
      <div>
        <button onClick={() => signOut()}>Logout</button>
      </div>
    )
  }
  return null
  // return (
  //   <div>
  //     <button onClick={() => signIn()}>Login</button>
  //   </div>
  // )
}
