export default function Footer() {
  return (
    <footer className="flex items-center justify-between h-16 max-w-xl mx-auto px-6">
      <p className="text-xs">© {new Date().getFullYear()}</p>
      <ul role="list" className="flex gap-2 text-xs">
        <li>
          <a
            href="https://github.com/johanhanses"
            className="text-accent hover:text-secondary transition"
            rel="noreferrer"
            target="_blank"
          >
            Github
            <span className="sr-only">Github link</span>
          </a>
        </li>

        <li>/</li>
        <li>
          <a
            href="https://www.linkedin.com/in/johanhanses"
            className="text-accent hover:text-secondary transition"
            rel="noreferrer"
            target="_blank"
          >
            Linkedin
            <span className="sr-only">Linkedin link</span>
          </a>
        </li>
      </ul>
    </footer>
  )
}
