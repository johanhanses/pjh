import { Layout } from '../components/Layout'
import { SocialList } from '../components/SocialList/SocialList'

export default function Home() {
  return (
    <Layout>
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
