import { getServerContext } from '@/utils/getServerContext'
import Link from 'next/link'
import { FC } from 'react'

const SubPage2: FC = () => {
    const serverContext = getServerContext()

    console.info(`contextValue in SubPage2: ${serverContext.contextValue}`)

    return (
        <div>
            <h1>This is SubPage2</h1>
            <Link href='test/subdir1'>Go to SubPage1</Link>
        </div>
    )
}

export default SubPage2
