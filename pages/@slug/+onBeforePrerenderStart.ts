export { onBeforePrerenderStart }

import { galleries, type Gallery } from '../../src/data/galleries'

function onBeforePrerenderStart() {
  return galleries.map((g: Gallery) => `/${g.slug}`)
}
