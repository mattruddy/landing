import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import Head from "next/head"

const PWA = () => {
  const router = useRouter()
  const { name } = router.query

  const [pwa, setPwa] = useState<any>()

  useEffect(() => {
    if (name) {
      const getData = async () => {
        const resp = await fetch(
          `https://progressiveapp.store/api/public/pwa/${name}`
        )
        const app = await resp.json()
        setPwa(app)
      }
      getData()
    }
  }, [name])

  return (
    <Layout>
      <Head>
        {pwa && (
          <>
            <title>{pwa.name}</title>
            <link></link>
          </>
        )}
      </Head>
    </Layout>
  )
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
