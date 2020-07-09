import { useEffect } from "react"
import Layout from "../../components/Layout"
import Head from "next/head"
import { InferGetServerSidePropsType, GetServerSideProps } from "next"
import { PWA as PWAType } from "../../util/types"

interface DataProps {
  app: PWAType
  name: string
}

// For info on server side props:
// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
const PWA = ({
  app,
  name,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  useEffect(() => {
    //window.location.href = `https://progressiveapp.store/pwa/${name}`
  }, [])

  return (
    <Layout
      title={app.name}
      url={`https://info.progressiveapp.store/pwa/${name}`}
      image={app.icon}
      description={app.description}
    />
  )
}

export const getServerSideProps: GetServerSideProps<DataProps> = async (
  context
) => {
  if (context.params && context.params.name) {
    const resp = await fetch(
      `https://progressiveapp.store/api/public/pwa/${context.params.name}`
    )
    const app: PWAType = await resp.json()
    return {
      props: {
        app,
        name: context.params.name,
      } as DataProps,
    }
  } else {
    return {
      props: {} as DataProps,
    }
  }
}

export default PWA
