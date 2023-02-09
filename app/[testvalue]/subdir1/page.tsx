import { getServerContext } from '@/utils/getServerContext'
import Link from 'next/link'
import { FC } from 'react'

const SubPage1: FC = () => {
    const serverContext = getServerContext()

    console.info(`contextValue in SubPage1: ${serverContext.contextValue}`)

    return (
        <div>
            <h1>This is SubPage1</h1>
            <Link href='test/subdir2'>Go to SubPage2</Link>
        </div>
    )
}

export default SubPage1
