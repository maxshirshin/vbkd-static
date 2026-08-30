export default Head

import { usePageContext } from 'vike-react/usePageContext'

function Head() {
  const { config } = usePageContext()
  const title = config.title ?? 'Svetlana Lanse — Botanical Artist'
  const description =
    config.description ??
    'Svetlana Lanse is a professional botanical artist working in watercolour and oil, an internationally exhibited artist and botanical art tutor.'

  return (
    <>
      <meta name="description" content={String(description)} />
      <meta property="og:title" content={String(title)} />
      <meta property="og:description" content={String(description)} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Svetlana Lanse — Botanical Artist" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}
