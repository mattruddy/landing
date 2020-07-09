import React, { ReactNode } from "react"
import styles from "./layout.module.css"

interface Props {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return <div className="page">{children}</div>
}

export default Layout
