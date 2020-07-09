import "bootstrap/dist/css/bootstrap.min.css"
import Head from "next/head"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function Store() {
  return (
    <div className="container">
      <Head>
        <title>Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="nav">
          <h1>yoyo</h1>
          <a href="/">home</a>
        </div>
      </main>

      <footer></footer>

      <style jsx>{``}</style>
    </div>
  )
}
