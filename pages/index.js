import "bootstrap/dist/css/bootstrap.min.css"
import Head from "next/head"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Navbar, NavbarBrand } from "react-bootstrap"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Progressive App Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar>
          <NavbarBrand>
            <img src="/logo.png" height="50px" /> Albatross
          </NavbarBrand>
        </Navbar>
        <Container>
          <Row>
            <Col></Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              {" "}
              hello
            </Col>
            <Col xs={12} md={6}>
              yo
            </Col>
          </Row>
        </Container>
      </main>

      <footer></footer>

      <style jsx>{``}</style>

      <style jsx global>{``}</style>
    </div>
  )
}
