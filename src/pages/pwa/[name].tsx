import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import Head from "next/head"
import { InferGetServerSidePropsType, GetServerSideProps } from "next"
import context from "react-bootstrap/esm/AccordionContext"

// For info on server side props:
// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
const PWA = ({
  app,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(app)
  return (
    <Layout>
      <Head>
        {app && (
          <>
            <title>{app.name}</title>
            <link></link>
          </>
        )}
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
    console.log(app)
    return {
      props: {
        app,
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
