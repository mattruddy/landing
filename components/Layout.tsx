import React, { ReactNode } from "react"
interface Props {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return <div className="page">{children}</div>
}

export default Layout
