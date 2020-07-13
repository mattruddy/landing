import useFrameControlledVideo from "../hook/useFrameControlledVideo"
import { useSpring, animated as a, interpolate } from "react-spring"
import { Col, Row } from "react-bootstrap"
import { useCallback, useEffect } from "react"
import { useInviewScoll } from "../hook/useInviewScroll"

interface Props {
  src: string
}

const VideoScrollRow = ({ src }: Props) => {
  const { videoRef, duration, setFrame } = useFrameControlledVideo(0)
  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }))
  const interpVideo = interpolate(
    [x, y],
    (x, y) => `translate3d(${-x / 50}px,${-y / 50}px,0)`
  )

  const [scrollRef, scrollY, scrollYMax] = useInviewScoll()

  const onMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      set({ x: x - window.innerWidth / 2, y: y - window.innerHeight / 2 }),
    []
  )

  useEffect(() => {
    if (duration !== NaN) {
      setFrame((scrollY / scrollYMax) * duration)
    }
  }, [scrollY])

  return (
    <Row onMouseMove={onMove} ref={scrollRef}>
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
            <source src={src} />
          </video>
        </a.div>
      </Col>
      <Col xs={12} md={4} className="pl-5">
        <div className="col-space-block" />
        <h5 className="text-center text-md-left lead-5 fw-600">Add DevLog</h5>
        <p className="lead-2 text-center text-md-left">
          Just enter your app and a quick markdown body.
        </p>
        <div className="col-space-block" />
        <div className="col-space-block" />
        <h5 className="text-center text-md-left lead-5 fw-600">Add DevLog</h5>
        <p className="lead-2 text-center text-md-left">
          Just enter your app and a quick markdown body.
        </p>
        <div className="col-space-block" />
        <div className="col-space-block" />
        <h5 className="text-center text-md-left lead-5 fw-600">Add DevLog</h5>
        <p className="lead-2 text-center text-md-left">
          Just enter your app and a quick markdown body.
        </p>
        <div className="col-space-block" />
        <div className="col-space-block" />
        <h5 className="text-center text-md-left lead-5 fw-600">Add DevLog</h5>
        <p className="lead-2 text-center text-md-left">
          Just enter your app and a quick markdown body.
        </p>
        <div className="col-space-block" />
      </Col>
    </Row>
  )
}

export default VideoScrollRow
