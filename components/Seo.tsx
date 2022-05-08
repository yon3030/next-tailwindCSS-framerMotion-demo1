import Head from 'next/head'

interface IHead {
  title: string
  description: string
}

export default function Seo({ title, description }: IHead) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content="/logo-meta.png" />
      <meta property="og:image:secure_url" content="/logo-meta.png" />
      <meta property="og:description" content={description} />
      <meta name="twitter:image" content="/logo-meta.png" />
      <meta name="twitter:image:src" content="/logo-meta.png" />

      <meta property="og:url" content="https://vadimghedreutan.io" />
      <meta property="og:type" content="portfolio" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/fav/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/fav/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/fav/favicon-16x16.png"
      />
    </Head>
  )
}
