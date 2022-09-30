export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/cv', '/cover-letter', '/posts', '/posts/(.*)']
}
