export default function Home() {
  return (
    <section className="max-w-xl text-center">
      <h1 className="text-black dark:text-white font-serif text-6xl md:text-7xl mb-12">
        Johan Hanses
      </h1>
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
        Builds stuff using TypeScript, Node, React, Vue, Svekte, GraphQL, SQL, Docker, Next and
        Remix. Currently learning data visualisations with D3. Should also learn python and get into
        ML.
      </p>
    </section>
  )
}
