import { FC } from "react"

interface PageLayoutProps {
    children: React.ReactNode
}

const PageLayout:FC<PageLayoutProps> = ({children}) => {
  return (
    <div      >
        {children}
    </div>
  )
}

export default PageLayout