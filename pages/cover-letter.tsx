import Link from 'next/link'

export default function CoverLetter() {
  return (
    <div className="mx-auto max-w-5xl">
      <nav className="block space-x-4">
        <Link href="/cv">
          <a>CV</a>
        </Link>
        <Link href="/cover-letter">
          <a>Cover letter</a>
        </Link>
      </nav>
      Coverletter
    </div>
  )
}
