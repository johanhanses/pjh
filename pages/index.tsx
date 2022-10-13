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
      <div className="mb-6 text xl">
        <p>
          React and TypeScript developer based in Falun, Sweden. Building
          HR-Tech at{' '}
          <a
            href="https://worklygroup.com"
            target="_blank"
            rel="noreferrer noopener"
            className="underline"
          >
            Workly.
          </a>
        </p>
        <p>
          Interested in Cloud/Serverless/Edge-stuff, Tailwind, UnoCss and
          currently very Vue3/Nuxt3-curious.
        </p>
      </div>
      <SocialList />
    </Layout>
  )
}
