import { ReactNode } from 'react'
import { Header } from './Header/Header'

type LayoutProps = {
  children: ReactNode | ReactNode[]
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 font-karla min-h-screen border-t-2 border-themeOrange dark:border-themeGreen px-6 md:px-4">
      <div className="mx-auto max-w-5xl ">
        <Header
          title="Johan Hanses"
          description="TypeScripter | Frontend Developer | DevOpser"
        />
        <main className="my-6">{children}</main>
      </div>
    </div>
  )
}
