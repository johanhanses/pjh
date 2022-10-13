import Image from 'next/future/image'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { CvNav } from '../components/CvNav'
// import { useSession } from 'next-auth/react'

export default function CoverLetter() {
  // const { data, status } = useSession()
  // if (status === 'authenticated') {
  //   console.log(data.id)
  // }

  return (
    <Layout>
      <Seo
        title="Johan Hanses - Cover-letter"
        description="Welcome to Johan Hanses home."
        keywords="Typescript, Developer, React"
      />
      <CvNav />

      <div className="border-t border-themeOrange dark:border-themeGreen pb-8" />
      <main className="flex flex-col md:flex-row">
        <article className="w-full md:w-2/3 order-last md:order-first py-8">
          Tjo
        </article>
        <aside className="w-full md:w-1/3 order-first md:order-last">
          <div className="w-[300px] h-[375px] relative mx-auto">
            <Image
              src="/kallslatten.jpeg"
              fill
              alt="Jag vid källslätten med grabbarna grus"
            />
          </div>
        </aside>
      </main>
    </Layout>
  )
}
