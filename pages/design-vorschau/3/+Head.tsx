import { usePageContext } from 'vike-react/usePageContext'

export default function Head() {
  const { config } = usePageContext()

  return (
    <>
      <meta name="robots" content="noindex,nofollow" />
      <meta name="description" content={String(config.description ?? '')} />
      <meta property="og:title" content={String(config.title ?? '')} />
      <meta property="og:description" content={String(config.description ?? '')} />
    </>
  )
}
