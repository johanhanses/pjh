export default function Home() {
  return (
    <section className="max-w-xl text-center">
      <h1 className="text-primary-content font-serif text-6xl md:text-7xl mb-12">Johan Hanses</h1>
      <p>
        A software developer using TypeScript, Node, React, GraphQL, SQL, Next and Remix. Currently
        learning data visualisations with D3.
      </p>
      <p>
        Work is at{' '}
        <a
          href="https://www.digitaltvilling.se"
          target="_blank"
          rel="noopener nofollow noreferrer"
          className="text-accent hover:text-secondary transition"
        >
          digitaltvilling.se
        </a>
      </p>
    </section>
  )
}
