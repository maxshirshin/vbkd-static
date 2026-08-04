import vikeReact from 'vike-react/config'
import type { Config } from 'vike/types'

export default {
  extends: [vikeReact],
  prerender: true,
  title: 'Verein Botanische Kunst Deutschland e.V.',
  description:
    'Willkommen beim Verein für Botanische Kunst Deutschland. Wir sind eine Gruppe von pflanzenbegeisterten Künstlern und Illustratoren.',
  lang: 'de',
} satisfies Config
