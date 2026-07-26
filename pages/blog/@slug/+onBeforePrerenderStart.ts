export { onBeforePrerenderStart }

import { blogPosts } from '../../../src/data/blogPosts'

function onBeforePrerenderStart() {
  return blogPosts.map((post) => `/blog/${post.slug}`)
}
