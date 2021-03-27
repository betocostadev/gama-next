import Head from 'next/head'

interface SeoProps {
  title: string
  description?: string
  image?: string
}

export default function Seo({
    title,
    description,
    image
  }: SeoProps) {
  return (
    <Head>
      <title>{ title }</title>
      { description && <meta name="description" content={ description } />}
      { image && <meta name="image" content={image} />}

      <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="img/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png" />
      <meta name="msapplication-TileImage" content="img/ms-icon-144x144.png" />

      <meta property="og:locale" content="pt_BR" />
      <meta property="og:url" content="https://www.meusite.com.br/ola-mundo" />
      <meta property="og:title" content="Utilizando as meta tags do Facebook." />
      <meta property="og:description" content="O tutorial para compartilhar o conteúdo do seu site de forma eficaz." />
      <meta property="og:image" content="img/ms-icon-310x310.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />

    </Head>
  )
}
