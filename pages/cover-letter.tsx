import Link from 'next/link'
import Image from 'next/future/image'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'

export default function CoverLetter() {
  return (
    <Layout>
      <Seo
        title="Johan Hanses - Cover-letter"
        description="Welcome to Johan Hanses home."
        keywords="Typescript, Developer, React"
      />
      <nav className="block space-x-4">
        <Link href="/cv">
          <a>CV</a>
        </Link>
        <Link href="/cover-letter">
          <a>Cover letter</a>
        </Link>
      </nav>
      <main>Hej</main>
      <aside>
        <div className="w-[300px] h-[375px] relative">
          <Image src="/kallslatten.jpeg" fill alt="jag i källslätten" />
        </div>
      </aside>
    </Layout>
  )
}
