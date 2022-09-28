import Link from 'next/link'

export const Button = ({
  type,
  passedHref,
  title
}: {
  type: 'link' | 'button'
  passedHref?: string
  title: string
}) => {
  if (type === 'link' && passedHref)
    return (
      <Link href={passedHref}>
        <a className="py-1 px-4 hover:bg-themeOrange hover:bg-opacity-10 rounded-lg transition-colors duration-300">
          {title}
        </a>
      </Link>
    )
  return <></>
}
