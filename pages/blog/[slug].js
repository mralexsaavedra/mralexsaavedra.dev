import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { getFiles, getFileBySlug } from '@/lib/mdx'

import BlogLayout from '@/layouts/blog'

import components from '@/components/MDXComponents'

export default function Blog ({ code, tweets, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <BlogLayout frontMatter={frontMatter}>
      <Component
        components={{
          ...components
        }}
      />
    </BlogLayout>
  )
}

export async function getStaticPaths () {
  const posts = await getFiles('blog')

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const post = await getFileBySlug('blog', params.slug)

  return { props: { ...post } }
}
