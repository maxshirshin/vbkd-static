import type { ComponentType } from 'react'

// Import MDX blog posts
import HelloWorld, { frontmatter as helloWorldFm } from '../../content/blog/hello-world.mdx'
import PaintingFromNature, { frontmatter as paintingFm } from '../../content/blog/painting-from-nature.mdx'
import RussianPost, { frontmatter as russianFm } from '../../content/blog/russian-post.mdx'

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  lang?: string
  Component: ComponentType
}

// Register all blog posts here — newest first
export const blogPosts: BlogPost[] = [
  {
    slug: helloWorldFm.slug,
    title: helloWorldFm.title,
    date: helloWorldFm.date,
    excerpt: helloWorldFm.excerpt,
    lang: helloWorldFm.lang,
    Component: HelloWorld,
  },
  {
    slug: paintingFm.slug,
    title: paintingFm.title,
    date: paintingFm.date,
    excerpt: paintingFm.excerpt,
    lang: paintingFm.lang,
    Component: PaintingFromNature,
  },
  {
    slug: russianFm.slug,
    title: russianFm.title,
    date: russianFm.date,
    excerpt: russianFm.excerpt,
    lang: russianFm.lang,
    Component: RussianPost,
  },
]
