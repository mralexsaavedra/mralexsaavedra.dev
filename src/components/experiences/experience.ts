import type { ImageMetadata } from 'astro'

export interface Experience {
  readonly logo: ImageMetadata
  readonly title: string
  readonly company: string
  readonly companyUrl: string
  readonly date: string
  readonly where: string
}
