import Head from 'next/head'

interface ISeoProps {
  title: string
  description: string
  keywords: string
}

export const Seo = ({ title, description, keywords }: ISeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
    </Head>
  )
}
