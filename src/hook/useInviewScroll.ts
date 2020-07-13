import { useRef, useState, useEffect, MutableRefObject } from "react"
import useScrollPosition from "@react-hook/window-scroll"

type useInviewScollType = () => [MutableRefObject<any>, number, number]

export const useInviewScoll: useInviewScollType = () => {
  const windowScrollY = useScrollPosition(60)
  const ref = useRef<any>()
  const [scrollMax, setScrollMax] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [scrollInitial, setScrollInitial] = useState(0)
  const [scrollYEnd, setScrollYEnd] = useState(0)

  useEffect(() => {
    if (ref && ref.current) {
      if (windowScrollY >= scrollInitial && windowScrollY <= scrollMax) {
        //console.log({ windowScrollY, scrollInitial, scrollMax })
        setScrollY(windowScrollY - scrollInitial)
      } else setScrollY(0)
    }
  }, [windowScrollY])

  useEffect(() => {
    if (ref && ref.current) {
      const elDistanceFromTop =
        window.pageYOffset + ref.current.getBoundingClientRect().top
      const elScrollMax =
        elDistanceFromTop + ref.current.offsetHeight - window.innerWidth
      console.log(elScrollMax)
      setScrollInitial(elDistanceFromTop)
      setScrollMax(elScrollMax)
      setScrollYEnd(ref.current.offsetHeight - window.innerWidth)
    }
  }, [ref])

  return [ref, scrollY, scrollYEnd]
}
