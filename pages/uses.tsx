import { useMDXComponent } from 'next-contentlayer/hooks'

import UsesLayout from 'layouts/uses'

import components from 'components/MDXComponents'

import { allOtherPages } from '.contentlayer/data'
import type { OtherPage } from '.contentlayer/types'

export default function Uses({ body: { code } }: OtherPage) {
  const Component = useMDXComponent(code)

  return (
    <UsesLayout>
      <Component components={components as any} />
    </UsesLayout>
  )
}

export async function getStaticProps() {
  const uses = allOtherPages.find((page) => page.slug === 'uses')!

  return { props: uses }
}
