import { readFileSync, readdirSync, writeFileSync } from 'fs'
import { join } from 'path'
import RSS from 'rss'

import { allBlogs } from '.contentlayer/data'

async function generate () {
  const feed = new RSS({
    title: 'Alexander Saavedra',
    site_url: 'https://mralexsaavedra.dev',
    feed_url: 'https://mralexsaavedra.dev/feed.xml'
  })

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `https://leerob.io/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary
    })
  })

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
