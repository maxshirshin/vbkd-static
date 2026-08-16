interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`inline-block px-8 py-3 text-sm font-semibold uppercase tracking-widest transition-colors bg-primary text-surface hover:bg-primary-dark ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
