import { LogInOutButton } from '../components/Header/LogInOutButton'
import { ThemeToggler } from '../components/Header/ThemeToggler'

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">Home</h1>
      <ThemeToggler />
      <LogInOutButton />
    </div>
  )
}
