interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'sm' | 'md'
}

export function Content({ children, className = '', ...props }: ContainerProps) {
  return (
    <div className={`w-full mx-auto px-6 pt-2 pb-4 max-w-[var(--container-max)] ${className}`} {...props}>
      {children}
    </div>
  )
}
