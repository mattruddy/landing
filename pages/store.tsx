import "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/link"
import Head from "next/head"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Layout from "../components/Layout"

const Store = () => {
  return (
    <Layout>
      <Head>
        <title>Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="nav">
          <h1>yoyo</h1>
          <Link href="/">
            <a>home</a>
          </Link>
        </div>
      </main>

      <footer></footer>

      <style jsx>{``}</style>
    </Layout>
  )
}

export default Store
