import Head from "next/head"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Navbar, NavbarBrand, Card, Button, ButtonGroup } from "react-bootstrap"
import Layout from "../components/Layout"
import Link from "next/link"
import { storeUris } from "../util/links"
import Branding from "../util/banding"

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>NoSpray</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar className="navbar navbar-expand-md navbar-default" sticky="top">
        <Container>
          <NavbarBrand className="HomeNavBrand">
            <h1 className="pl-3">{Branding.storeName}</h1>
          </NavbarBrand>
        </Container>
      </Navbar>
      <div className="container-fluid">
        <Row className="header pb-5 justify-content-md-center">
          <Col
            xs={12}
            className="align-self-center ml-auto mb-5 text-center pl-3 pr-3"
          >
            {" "}
            <h1 className="fw-600">NoSpray</h1>
            <p className="lead-2">Hypersentitivity Individual Registrar</p>
            <Button href={`https://nospray.us/signup`}>Sign Up</Button>
          </Col>
          <Col xs={8}>
            <img height="100%" width="100%" src="store.png" />
          </Col>
        </Row>
      </div>
      <Row className="row-gap-y text-center text-default justify-content-md-center mt-5">
        <Col>
          <h3>Pricing</h3>
        </Col>
      </Row>
      <Row className="row-gap-y text-center text-default justify-content-md-center mt-5">
        <Col>
          <Card>
            <Card.Header>Individual</Card.Header>
            <Card.Body></Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Company</Card.Header>
            <Card.Body></Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="row-gap-y text-center text-default justify-content-md-center mt-5">
        <Col xs={12}>
          <h5 className="lead-3">Login or Sign up now!</h5>
        </Col>
        <Col xs={12}>
          <ButtonGroup>
            <Button>Login</Button>
            <Button>Sign Up</Button>
          </ButtonGroup>
        </Col>
      </Row>
      <div className="space-block" />
      <footer className="footer">
        <Container>
          <Row>
            <Col xs={12} className="text-center text-lg-left">
              <img className="logo-footer" src="store.png" />
            </Col>
          </Row>
        </Container>
      </footer>
    </Layout>
  )
}

export default Home
