import { GetServerSideProps } from 'next'
import { getCsrfToken } from 'next-auth/react'
import { Button } from '../../../components/Auth/Button'
import { Input } from '../../../components/Auth/Input'
import { Layout } from '../../../components/Layout'

type SignInProps = {
  csrfToken: string
}

export default function SignIn({ csrfToken }: SignInProps) {
  return (
    <Layout>
      <form
        method="post"
        action="/api/auth/callback/credentials"
        className="space-y-4 w-full sm:w-1/2 mx-auto"
      >
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <Input name="username" type="text" />
        <Input name="password" type="password" />
        <Button />
      </form>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      csrfToken: await getCsrfToken(context)
    }
  }
}
