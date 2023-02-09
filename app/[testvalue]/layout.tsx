import { getServerContext } from '@/utils/getServerContext'
import { FC } from 'react'

interface LayoutProps {
    children: React.ReactNode
    params: { testvalue: string }
}

const Layout: FC<LayoutProps> = ({ children, params }) => {
    const serverContext = getServerContext()
    console.info(`Setting contextValue to '${params.testvalue}' in layout.tsx`)
    serverContext.contextValue = params.testvalue

    return (
        <html lang='en'>
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body>{children}</body>
        </html>
    )
}

export default Layout
