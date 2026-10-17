import type { HTMLAttributes, ReactNode } from 'react'

interface QuoteProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
}

export function Quote({ children, className = '', ...props }: QuoteProps) {
  return (
    <span
      className={`block my-4 border-l-2 border-primary pl-4 italic text-primary-dark ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
