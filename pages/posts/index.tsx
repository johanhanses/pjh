import { Post } from '@prisma/client'
import Link from 'next/link'
import { GetStaticProps } from 'next/types'
import { Layout } from '../../components/Layout'
import { Seo } from '../../components/Seo'
import prisma from '../../lib/prisma'

export const getStaticProps: GetStaticProps = async () => {
  const posts = await prisma.post.findMany()

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts))
    }
  }
}

type PostsProps = {
  posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
  return (
    <Layout>
      <Seo
        title="Johan Hanses - Posts"
        description="Welcome to Johan Hanses home."
        keywords="Typescript, Developer, React"
      />
      <h1 className="text-2xl md:text-3xl mb-4">Posts</h1>
      <main className="space-y-8">
        {posts &&
          posts.map((post) => (
            <Link href={`/posts/${post.id}`} key={post.id}>
              <a className="block">
                <h2>{post.title}</h2>
                <small>{post.createdAt.toString()}</small>
                <div>
                  <p>{post.body}</p>
                </div>
              </a>
            </Link>
          ))}
      </main>
    </Layout>
  )
}
