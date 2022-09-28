type InputProps = {
  name: string
  type: string
}

export const Input = ({ name, type }: InputProps) => {
  return (
    <div>
      <label htmlFor={name} className="sr-only">
        {name}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full px-4 py-1 border focus:outline-none focus:ring focus:ring-themeOrange dark:focus:ring-themeGreen placeholder:capitalize rounded-lg"
        placeholder={name}
      />
    </div>
  )
}
