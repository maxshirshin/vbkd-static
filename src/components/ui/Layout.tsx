// Tailwind only picks up complete, literal class names, so every span value
// used across the site must be spelled out here rather than interpolated.
const colsClasses: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  6: 'grid-cols-6',
  12: 'grid-cols-12',
}

const smSpanClasses: Record<number, string> = {
  1: 'col-span-1',
  2: 'col-span-2',
  3: 'col-span-3',
  4: 'col-span-4',
  5: 'col-span-5',
  6: 'col-span-6',
  7: 'col-span-7',
  8: 'col-span-8',
  9: 'col-span-9',
  10: 'col-span-10',
  11: 'col-span-11',
  12: 'col-span-12',
}

const mdSpanClasses: Record<number, string> = {
  1: 'md:col-span-1',
  2: 'md:col-span-2',
  3: 'md:col-span-3',
  4: 'md:col-span-4',
  5: 'md:col-span-5',
  6: 'md:col-span-6',
  7: 'md:col-span-7',
  8: 'md:col-span-8',
  9: 'md:col-span-9',
  10: 'md:col-span-10',
  11: 'md:col-span-11',
  12: 'md:col-span-12',
}

const lgSpanClasses: Record<number, string> = {
  1: 'lg:col-span-1',
  2: 'lg:col-span-2',
  3: 'lg:col-span-3',
  4: 'lg:col-span-4',
  5: 'lg:col-span-5',
  6: 'lg:col-span-6',
  7: 'lg:col-span-7',
  8: 'lg:col-span-8',
  9: 'lg:col-span-9',
  10: 'lg:col-span-10',
  11: 'lg:col-span-11',
  12: 'lg:col-span-12',
}

export function Grid({
  children,
  cols = 12,
  contained = true,
  className = '',
}: {
  children: React.ReactNode
  cols?: number
  // Set false for a Grid nested inside another Grid/Col, so the outer
  // container width/padding isn't applied twice.
  contained?: boolean
  className?: string
}) {
  const containerClass = contained
    ? 'w-full mx-auto px-6 pt-2 pb-4 max-w-[var(--container-max)]'
    : ''
  return (
    <div className={`${containerClass} grid ${colsClasses[cols]} gap-x-8 gap-y-16 ${className}`}>
      {children}
    </div>
  )
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
  const spanClass = `${smSpanClasses[sm]} ${mdSpanClasses[md]} ${lgSpanClasses[lg]}`
  return <div className={`flex flex-col ${spanClass} ${className}`}>{children}</div>
}
