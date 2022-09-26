import Link from 'next/link'
import { LogInOutButton } from '../components/Header/LogInOutButton'
import { ThemeToggler } from '../components/Header/ThemeToggler'

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-3xl">Home</h1>
      <ThemeToggler />
      <LogInOutButton />
      <p>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </p>
      <p>
        <Link href="/cv">
          <a>CV</a>
        </Link>
      </p>
    </div>
  )
}
