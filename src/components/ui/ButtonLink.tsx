interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'solid' | 'outline'
}

export function ButtonLink({
  children,
  className = '',
  variant = 'solid',
  ...props
}: ButtonLinkProps) {
  const base =
    'inline-block px-8 py-3 text-sm uppercase tracking-widest transition-colors text-center'
  const variants = {
    solid: 'bg-primary text-surface hover:bg-primary-dark',
    outline: 'border border-border text-primary hover:border-primary',
  }

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}
