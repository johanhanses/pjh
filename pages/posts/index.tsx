import { Post } from '@prisma/client'
import { GetServerSideProps } from 'next/types'
import prisma from '../../lib/prisma'

export const getServerSideProps: GetServerSideProps = async (context) => {
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
    <div className="mx-auto max-w-5xl">
      <h1 className="text-3xl mb-4">Posts</h1>
      {posts &&
        posts.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <small>{post.createdAt.toString()}</small>
            <div>
              <p>{post.body}</p>
            </div>
          </article>
        ))}
    </div>
  )
}
