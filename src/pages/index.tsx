import Head from "next/head"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Navbar, NavbarBrand, Card } from "react-bootstrap"
import Layout from "../components/Layout"
import Link from "next/link"

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Progressive App Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar className="nav">
        <NavbarBrand className="HomeNavBrand">
          <img style={{ marginRight: "16px" }} src="/logo.png" height="50px" />
          <h1>Albattross</h1>
        </NavbarBrand>
      </Navbar>
      <Container>
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            {" "}
            <h1>Progressive App Store</h1>
            <Card>
              <Link href="pwa/Progressive-App-Store">
                <a>
                  <h2>Here is a link to an app</h2>
                </a>
              </Link>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            Sights API
          </Col>
        </Row>
      </Container>
      <style jsx>{``}</style>

      <style jsx global>{``}</style>
    </Layout>
  )
}

export default Home
