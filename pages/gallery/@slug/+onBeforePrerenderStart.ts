export { onBeforePrerenderStart }

import { galleries } from '../../../src/data/galleries'

function onBeforePrerenderStart() {
  return galleries.map((g) => `/gallery/${g.slug}`)
}
