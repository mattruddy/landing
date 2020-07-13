import React, { useRef, useState, useEffect } from "react"

type UseFrameControlledVideoType = (
  startFrame?: number
) => {
  videoRef: React.RefObject<HTMLVideoElement>
  duration: number
  setFrame: React.Dispatch<React.SetStateAction<number>>
}

const useFrameControlledVideo: UseFrameControlledVideoType = (
  startFrame?: number
) => {
  const [frame, setFrame] = useState<number>(startFrame ?? 0)
  const [duration, setDuration] = useState<number>(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.currentTime = frame
    }
  }, [frame])

  useEffect(() => {
    if (videoRef && videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }, [videoRef])

  return { videoRef, duration, setFrame }
}

export default useFrameControlledVideo
