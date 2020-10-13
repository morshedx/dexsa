import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = `DexSA - Dhanmondi Government Boy's High School`,
  author = 'M Salauddin Morshed',
  title = `DexSA - Dhanmondi Government Boy's High School`,
  keywords = `Dhanmondy, Boy's, High, School`,
  image,
  url,
}) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="author" content={author} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {/* OG Meta */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      {/* Twitter Meta */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
