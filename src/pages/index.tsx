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
        <title>Progressive App Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar className="navbar navbar-expand-md navbar-default" sticky="top">
        <Container>
          <NavbarBrand className="HomeNavBrand">
            <img src="/store.png" height="50px" className="logo-header" />
            <h1 className="pl-3">{Branding.storeName}</h1>
          </NavbarBrand>
        </Container>
      </Navbar>
      <section>
        <div className="container-fluid">
          <Row className="header pb-5">
            <Col
              xs={12}
              className="align-self-center ml-auto mb-5 text-center pl-3 pr-3"
            >
              {" "}
              <h1 className="fw-600">Progressive App Store</h1>
              <p className="lead-2">
                World's largest store of developer made web apps.
              </p>
              <Button
                className="btn btn-lg btn-main"
                href={`${storeUris.base}${storeUris.login}`}
              >
                Sign Up
              </Button>
            </Col>
            <Col xs={12} className="ml-auto mt-5 video-landing-full">
              <video autoPlay loop playsInline>
                <source src="/videos/devlog.mp4" />
              </video>
            </Col>
          </Row>
        </div>
      </section>
      <main>
        <section className="section bg-alternate overflow-hidden">
          <div className="container-fluid pb-5">
            <header className="section-header mt-5">
              <h1 className="lead-5 fw-600">Follow Your Favorate Web Apps</h1>
              <p className="lead-4">
                Developers can post DevLogs to update you on behind the scenes
                developerment.
              </p>
            </header>
            <Row className="align-items-center">
              <Col xs={12} md={4} className="pl-5">
                <h5 className="text-center text-md-left lead-5 fw-600">
                  Add DevLog
                </h5>
                <p className="lead-2 text-center text-md-left">
                  Just enter your app and a quick markdown body.
                </p>
              </Col>
              <Col xs={12} md={8} className="text-center video-landing-small">
                <video autoPlay loop playsInline>
                  <source src="/videos/devlog.mp4" />
                </video>
              </Col>
            </Row>
            <div className="space-block" />
            <Row className="align-items-center">
              <Col xs={12} md={8} className="text-center video-landing-small">
                <video autoPlay loop playsInline>
                  <source src="/videos/devlog.mp4" />
                </video>
              </Col>
              <Col xs={12} md={4} className="pl-5">
                <h5 className="text-center text-md-left lead-5 fw-600">
                  Add DevLog
                </h5>
                <p className="lead-2 text-center text-md-left">
                  Just enter your app and a quick markdown body.
                </p>
              </Col>
            </Row>
          </div>
        </section>
        <section className="section pt-5">
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
        </section>
        <div className="space-block" />
      </main>
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
