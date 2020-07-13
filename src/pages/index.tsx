import Head from "next/head"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Navbar, NavbarBrand, Card, Button, ButtonGroup } from "react-bootstrap"
import Layout from "../components/Layout"
import Link from "next/link"
import { storeUris } from "../util/links"
import Branding from "../util/banding"
import { useSpring, animated as a, interpolate } from "react-spring"
import { useCallback, useEffect } from "react"
import useFrameControlledVideo from "../hook/useFrameControlledVideo"
import useScrollPosition from "@react-hook/window-scroll"

const Home = () => {
  const { videoRef, duration, setFrame } = useFrameControlledVideo(0)
  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }))
  const scrollY = useScrollPosition(60)
  const interpVideo = interpolate(
    [x, y],
    (x, y) => `translate3d(${-x / 50}px,${-y / 50}px,0)`
  )
  const onMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      set({ x: x - window.innerWidth / 2, y: y - window.innerHeight / 2 }),
    []
  )

  useEffect(() => {
    const scrollYMax = document.body.scrollHeight - window.innerHeight
    if (duration) {
      setFrame((scrollY / scrollYMax) * duration)
    }
  }, [scrollY])

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
        </Row>
      </div>
      <div onMouseMove={onMove} className="container-fluid pb-5 bg-alternate">
        <Row>
          <Col
            xs={12}
            md={8}
            className="text-center video-landing-small pl-5 mt-5"
            style={{ position: "sticky", top: "82px" }}
          >
            <a.div
              style={{
                transform: interpVideo,
                position: "sticky",
                top: "82px",
              }}
            >
              <video playsInline ref={videoRef} preload="metadata">
                <source src="/videos/devlog.mp4" />
              </video>
            </a.div>
          </Col>
          <Col xs={12} md={4} className="pl-5">
            <div className="col-space-block" />
            <h5 className="text-center text-md-left lead-5 fw-600">
              Add DevLog
            </h5>
            <p className="lead-2 text-center text-md-left">
              Just enter your app and a quick markdown body.
            </p>
            <div className="col-space-block" />
            <div className="col-space-block" />
            <h5 className="text-center text-md-left lead-5 fw-600">
              Add DevLog
            </h5>
            <p className="lead-2 text-center text-md-left">
              Just enter your app and a quick markdown body.
            </p>
            <div className="col-space-block" />
            <div className="col-space-block" />
            <h5 className="text-center text-md-left lead-5 fw-600">
              Add DevLog
            </h5>
            <p className="lead-2 text-center text-md-left">
              Just enter your app and a quick markdown body.
            </p>
            <div className="col-space-block" />
            <div className="col-space-block" />
            <h5 className="text-center text-md-left lead-5 fw-600">
              Add DevLog
            </h5>
            <p className="lead-2 text-center text-md-left">
              Just enter your app and a quick markdown body.
            </p>
            <div className="col-space-block" />
          </Col>
        </Row>
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
