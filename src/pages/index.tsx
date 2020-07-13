import Head from "next/head"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Navbar, NavbarBrand, Button, ButtonGroup } from "react-bootstrap"
import Layout from "../components/Layout"
import { storeUris } from "../util/links"
import Branding from "../util/banding"
import VideoScrollRow from "../components/VideoScrollRow"

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Progressive App Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar className="navbar navbar-expand-md navbar-default" sticky="top">
        <Container>
          <NavbarBrand className="HomeNavBrand">
            <img src="/store-blue.png" height="50px" className="logo-header" />
            <p className="pl-3">{Branding.storeName}</p>
          </NavbarBrand>
        </Container>
      </Navbar>
      <div className="container-fluid">
        <Row className="header pb-5">
          <Col
            xs={12}
            className="align-self-center ml-auto mb-5 text-center pl-3 pr-3"
          >
            {" "}
            <h1 className="fw-600">Discover and Follow Developer Apps</h1>
            <p className="lead-2">
              World's largest store of developer made web apps.
            </p>
            <Button className="btn btn-lg btn-main" href={`${storeUris.base}`}>
              Check It Out
            </Button>
          </Col>
        </Row>
      </div>
      <div className="container-fluid pb-5 bg-alternate">
        <VideoScrollRow src="https://landing-pastore.s3.amazonaws.com/devlog.mp4" />
        <div className="space-block" />
      </div>
      <div className="container-fluid pb-5 bg-alternate">
        <VideoScrollRow src="https://cdn.discordapp.com/attachments/729739778827747339/731980039578583050/intro.mp4" />
        <div className="space-block" />
      </div>
      <Row className="row-gap-y text-center text-default justify-content-md-center mt-5">
        <Col xs={12}>
          <h5 className="lead-3">Login or Sign up now!</h5>
        </Col>
        <Col xs={12}>
          <ButtonGroup>
            <Button className="btn btn-lg btn-xxl btn-main">Login</Button>
            <Button className="btn btn-lg btn-xxl btn-sec">Sign Up</Button>
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
