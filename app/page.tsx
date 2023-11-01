export default function Home() {
  return (
    <section className="max-w-xl text-center">
      <h1 className="text-black dark:text-white font-serif text-6xl md:text-7xl mb-12 animate-in slide-in-from-bottom-2/4 duration-1000 fade-in">
        Johan Hanses
      </h1>
      <div className="animate-in slide-in-from-top-2/4 duration-1000 fade-in">
        <p>
          A software developer at{' '}
          <a
            href="https://www.digitaltvilling.se"
            target="_blank"
            rel="noopener nofollow noreferrer"
            className="text-accent hover:text-secondary transition"
          >
            digitaltvilling.se
          </a>
          .
        </p>
        <p>
          Builds stuff using TypeScript, Node, React, Vue, GraphQL, SQL, Docker, Next and Remix.
          Currently learning data visualisations with D3 and Visx.
        </p>
      </div>
    </section>
  )
}
