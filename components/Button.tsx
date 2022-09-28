import Link from 'next/link'

type ButtonProps = {
  variant?: 'filled' | 'ghost'
  type: 'link' | 'button'
  passedHref?: string
  title: string
  additionalClasses?: string
}

const ghostClasses =
  'focus:outline-none focus:ring focus:ring-themeOrange dark:focus:ring-themeGreen py-1 px-4 hover:bg-themeOrange hover:bg-opacity-10 dark:hover:bg-themeGreen dark:hover:bg-opacity-20 rounded-lg transition-colors duration-300'
const filledClasses =
  'focus:outline-none focus:ring focus:ring-themeOrange dark:focus:ring-themeGreen py-1 px-4 border hover:bg-themeOrange hover:bg-opacity-10 dark:hover:bg-themeGreen dark:hover:bg-opacity-20 rounded-lg transition-colors duration-300'

export const Button = ({
  type,
  passedHref,
  title,
  additionalClasses,
  variant = 'filled'
}: ButtonProps) => {
  const classes = variant === 'filled' ? filledClasses : ghostClasses

  if (type === 'link' && passedHref)
    return (
      <Link href={passedHref}>
        <a className={`${classes} ${additionalClasses}`}>{title}</a>
      </Link>
    )
  if (type === 'button')
    return (
      <button type="submit" className={`${classes} ${additionalClasses}`}>
        {title}
      </button>
    )
  return null
}
