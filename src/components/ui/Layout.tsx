export function Grid({
  children,
  cols = 12,
  className = '',
}: {
  children: React.ReactNode
  cols?: number
  className?: string
}) {
  return <div className={`grid grid-cols-${cols} gap-x-8 gap-y-16 ${className}`}>{children}</div>
}

export function Col({
  children,
  className = '',
  lg = 4,
  md = 6,
  sm = 12,
}: {
  children: React.ReactNode
  className?: string
  lg?: number
  md?: number
  sm?: number
}) {
  const spanClass = `col-span-${sm} md:col-span-${md} lg:col-span-${lg}`
  return <div className={`flex flex-col ${spanClass} ${className}`}>{children}</div>
}
