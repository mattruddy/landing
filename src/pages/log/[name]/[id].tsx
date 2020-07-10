import { useEffect } from "react"
import Layout from "../../../components/Layout"
import { InferGetServerSidePropsType, GetServerSideProps } from "next"
import { DevLog as DevLogType } from "../../../util/types"
import { dateFormatter } from "../../../util"

interface DataProps {
  devLog: DevLogType
  id: number
  name: string
}

const DevLog = ({
  id,
  name,
  devLog,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  useEffect(() => {
    window.location.href = `https://progressiveapp.store/log/${name}/${id}`
  }, [])

  return (
    <Layout
      title={`DevLog - ${devLog.appName} - ${dateFormatter(devLog.loggedAt)}`}
      url={`https://info.progressiveapp.store/log/${name}/${id}`}
      image={devLog.icon}
      description={`Check out ${devLog.appName}'s DevLog!`}
    />
  )
}

export const getServerSideProps: GetServerSideProps<DataProps> = async (
  context
) => {
  if (context.params && context.params.name && context.params.id) {
    const resp = await fetch(
      `https://progressiveapp.store/api/public/log/${context.params.id}`
    )
    const devLog: DevLogType = await resp.json()
    console.log(devLog)
    return {
      props: {
        devLog,
        id: Number.parseInt(context.params.id as string),
        name: context.params.name,
      } as DataProps,
    }
  } else {
    return {
      props: {} as DataProps,
    }
  }
}

export default DevLog
