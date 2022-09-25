import { Email } from './Email'
import { Github } from './Github'
import { LinkedIn } from './LinkedIn'

const mailURL = 'mailto:johanhanses@gmail.com'
const linkedInURL = 'https://www.linkedin.com/in/johanhanses/'
const githubURL = 'https://github.com/johanhanses'

const links = [
  {
    url: mailURL,
    icon: <Email />
  },
  {
    url: linkedInURL,
    icon: <LinkedIn />
  },
  {
    url: githubURL,
    icon: <Github />
  }
]

export const SocialList = () => (
  <ul className="flex items-baseline space-x-4">
    {links.map((link) => (
      <li key={link.url}>
        <a
          className="sm:hover:text-themeOrange dark:sm:hover:text-themeGreen transition-colors duration-300"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </a>
      </li>
    ))}
  </ul>
)
