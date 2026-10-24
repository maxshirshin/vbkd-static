export function Prose({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={[
        'space-y-6 text-lg text-text',
        '[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:marker:text-primary-dark',
        '[&_ol]:list-decimal [&_ol]:pl-6',
        '[&_li]:mb-1',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}
