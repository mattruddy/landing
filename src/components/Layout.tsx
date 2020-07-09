import React, { ReactNode } from "react"
import Head from "next/head"

interface Props {
  title?: string
  description?: string
  image?: string
  url?: string
  children?: ReactNode
}

const Layout = ({ children, title, description, image, url }: Props) => {
  const defaultDescription = "The largest store of progressive apps."
  const defaultImage = ""
  const defaultTitle = "ProgressiveApp.Store"
  const defaultUrl = "https://progressiveapp.store"

  return (
    <div className="page">
      <Head>
        <meta
          property="og:title"
          content={title ?? defaultTitle}
          key="og-title"
        />
        <meta
          property="og:description"
          content={description ?? defaultDescription}
          key="og-description"
        />
        <meta
          property="og:image"
          content={image ?? defaultImage}
          key="og-image"
        />
        <meta property="og:url" content={url ? url : defaultUrl} key="og-url" />
        <meta
          name="title"
          content={title ?? "Progressive App Store"}
          key="title"
        />
        <meta
          name="description"
          content={description ?? defaultDescription}
          key="description"
        />
        <meta name="image" content={image ?? defaultImage} key="image" />
        <meta name="url" content={url ? url : defaultUrl} key="url" />
      </Head>
      {children}
    </div>
  )
}

export default Layout
