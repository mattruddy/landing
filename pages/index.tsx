import Head from "next/head"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Navbar, NavbarBrand } from "react-bootstrap"
import Layout from "../components/Layout"

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Progressive App Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar>
        <NavbarBrand>
          <img src="/logo.png" height="50px" /> Albattross
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
      <style jsx>{``}</style>

      <style jsx global>{``}</style>
    </Layout>
  )
}

export default Home
