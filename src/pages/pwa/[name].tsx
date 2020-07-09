import { useEffect } from "react"
import Layout from "../../components/Layout"
import Head from "next/head"
import { InferGetServerSidePropsType, GetServerSideProps } from "next"

// For info on server side props:
// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
const PWA = ({
  app,
  name,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  useEffect(() => {
    // window.location.href = `https://progressiveapp.store/pwa/${name}`
  }, [])

  return (
    <Layout>
      <Head>
        <meta property="og:title" content={app.name} key="og-title" />
        <meta
          property="og:description"
          content={app.description}
          key="og-description"
        />
        <meta property="og:image" content={app.icon} key="og-image" />
        <meta
          property="og:url"
          content={`https://info.progressiveapp.store/pwa/${name}`}
          key="og-url"
        />
        <meta property="title" content={app.name} key="title" />
        <meta
          property="description"
          content={app.description}
          key="description"
        />
        <meta property="image" content={app.icon} key="image" />
        <meta
          property="url"
          content={`https://info.progressiveapp.store/pwa/${name}`}
          key="url"
        />
      </Head>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.params && context.params.name) {
    const resp = await fetch(
      `https://progressiveapp.store/api/public/pwa/${context.params.name}`
    )
    const app = await resp.json()
    return {
      props: {
        app,
        name: context.params.name,
      },
    }
  } else {
    return {
      props: {},
    }
  }
}

// not sure if this is even possible

// This function gets called at build time
// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: {
//           name: name,
//         },
//       },
//     ],
//     fallback: false,
//   }
// }

// export async function getStaticProps({ params }: any) {
//   return {
//     props: {
//       pwa,
//     },
//   }
// }

export default PWA
