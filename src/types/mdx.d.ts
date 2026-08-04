declare module '*.mdx' {
  import type { ComponentType } from 'react'

  export const frontmatter: {
    title: string
    slug: string
    date: string
    excerpt: string
    lang?: string
    [key: string]: unknown
  }

  const MDXComponent: ComponentType
  export default MDXComponent
}
