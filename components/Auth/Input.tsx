type InputProps = {
  name: string
  type: string
}

export const Input = ({ name, type }: InputProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="sr-only"
      >
        {name}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full px-2 py-1 border focus:outline-none focus:ring placeholder:capitalize"
        placeholder={name}
      />
    </div>
  )
}
