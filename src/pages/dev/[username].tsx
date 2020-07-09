import { useEffect } from "react"
import Layout from "../../components/Layout"
import { InferGetServerSidePropsType, GetServerSideProps } from "next"
import { PublicProfile } from "../../util/types"

interface DataProps {
  profile: PublicProfile
  name: string
}

// For info on server side props:
// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
const Dev = ({
  profile,
  name,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  useEffect(() => {
    window.location.href = `https://progressiveapp.store/dev/${name}`
  }, [])

  return (
    <Layout
      title={profile.username}
      url={`https://info.progressiveapp.store/pwa/${name}`}
      image={profile.avatar}
      description={profile.header}
    />
  )
}

export const getServerSideProps: GetServerSideProps<DataProps> = async (
  context
) => {
  if (context.params && context.params.username) {
    const resp = await fetch(
      `https://progressiveapp.store/api/public/profile/${context.params.username}`
    )
    const profile: PublicProfile = await resp.json()
    console.log(profile)
    return {
      props: {
        profile,
        name: context.params.username,
      } as DataProps,
    }
  } else {
    return {
      props: {} as DataProps,
    }
  }
}

export default Dev
