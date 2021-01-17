import { NextSeo, ArticleJsonLd } from 'next-seo'

const BlogSeo = ({ title, summary, publishedAt, url, image }) => {
  const date = new Date(publishedAt).toISOString()
  const featuredImage = {
    url: `https://mralexsaavedra.dev${image}`,
    alt: title
  }

  return (
    <>
      <NextSeo
        title={`${title} – Alexander Saavedra`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date
          },
          url,
          title,
          description: summary,
          images: [featuredImage]
        }}
      />
      <ArticleJsonLd
        authorName='Alexander Saavedra'
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[featuredImage]}
        publisherLogo='/static/favicons/android-chrome-192x192.png'
        publisherName='Alexander Saavedra'
        title={title}
        url={url}
      />
    </>
  )
}

export default BlogSeo
