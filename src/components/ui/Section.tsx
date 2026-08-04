export function Section({ children, className = '', ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={`py-16 md:py-24 ${className}`} {...props}>
      {children}
    </section>
  )
}
