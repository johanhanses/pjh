import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { SocialList } from '../components/SocialList/SocialList'

export default function Home() {
  return (
    <Layout>
      <Seo
        title="Johan Hanses"
        description="Welcome to Johan Hanses home."
        keywords="Typescript, Developer, React"
      />
      <p className="mb-6 text xl">
        React and TypeScript developer based in Falun, Sweden. Building HR-Tech
        at{' '}
        <a
          href="https://worklygroup.com"
          target="_blank"
          rel="noreferrer noopener"
          className="underline"
        >
          Workly
        </a>
      </p>
      <SocialList />
    </Layout>
  )
}
