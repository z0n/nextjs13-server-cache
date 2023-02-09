import { cache } from 'react'

// https://github.com/eric-burel/next13-server-context/blob/main/src/app/getServerContext.ts
export const getServerContext: () => {
    contextValue: string | null
} = cache(() => ({
    contextValue: null,
}))
