export interface ShopItem {
  slug: string
  title: string
  description: string
  price: string
  image?: string
  externalUrl: string
  availability?: string
}

export const shopItems: ShopItem[] = [
  {
    slug: 'breath-of-fire-print',
    title: 'Breath of Fire — Limited Edition Print',
    description:
      'Museum-quality giclée print on Hahnemühle fine art paper. Signed and numbered edition of 50.',
    price: '£120',
    externalUrl: '#',
    availability: 'In stock',
  },
  {
    slug: 'botanical-workshop-spring',
    title: 'Spring Botanical Watercolour Workshop',
    description:
      'Online workshop covering botanical illustration techniques. 4 sessions of 2 hours each. Materials list provided.',
    price: '£180',
    externalUrl: '#',
    availability: 'Booking open',
  },
  {
    slug: 'the-secret-original',
    title: 'The Secret — Original Watercolour',
    description:
      'Original botanical watercolour on vellum. Framed and ready to hang. Certificate of authenticity included.',
    price: '£2,400',
    externalUrl: '#',
    availability: 'Available',
  },
  {
    slug: 'physalis-print',
    title: 'Physalis — Limited Edition Print',
    description:
      'Archival giclée print on cotton rag paper. Signed and numbered edition of 30.',
    price: '£95',
    externalUrl: '#',
    availability: 'In stock',
  },
  {
    slug: 'beginners-kit',
    title: 'Botanical Art Beginners Kit',
    description:
      'Curated set of watercolour paints, brushes, and paper recommended by Svetlana for beginners. Includes a printed technique guide.',
    price: '£65',
    externalUrl: '#',
    availability: 'In stock',
  },
]
