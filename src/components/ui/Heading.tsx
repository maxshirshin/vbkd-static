interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4'
}

const sizeClasses = {
  h1: 'text-4xl md:text-5xl mb-8',
  h2: 'text-3xl md:text-4xl mb-6',
  h3: 'text-2xl md:text-3xl mb-4',
  h4: 'text-xl md:text-2xl mb-3',
}

export function Heading({
  children,
  className = '',
  as: Component = 'h2',
  ...props
}: HeadingProps) {
  const baseClasses = 'font-heading text-primary-dark'

  return (
    <Component className={`${baseClasses} ${sizeClasses[Component]} ${className}`} {...props}>
      {children}
    </Component>
  )
}
