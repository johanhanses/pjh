import { Post as PostType } from '@prisma/client'
import { GetServerSideProps } from 'next/types'
import { Layout } from '../../components/Layout'
import prisma from '../../lib/prisma'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { postId } = context.query
  const post =
    postId && (await prisma.post.findUnique({ where: { id: Number(postId) } }))

  return {
    props: {
      post: JSON.parse(JSON.stringify(post))
    }
  }
}

type PostProps = {
  post: PostType
}

export default function Post({ post }: PostProps) {
  return (
    <Layout>
      <article>
        <h2>{post.title}</h2>
        <small>{post.createdAt.toString()}</small>
        <div>
          <p>{post.body}</p>
        </div>
      </article>
    </Layout>
  )
}
