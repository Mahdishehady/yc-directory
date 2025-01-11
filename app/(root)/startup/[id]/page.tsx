import { client } from '@/sanity/lib/client';
import { Startup_by_id } from '@/sanity/lib/queries';
import React from 'react'

export const experimental_ppr = true;
const StartupPage = async ({ params }: { params: Promise<{ id: string }> }) => {

    const id = (await params).id

    const post = await client.fetch(Startup_by_id , {id})

    return (
        <>
        <h1 className='text-3xl'>
            {post.title}

        </h1>
        </>
    )
}

export default StartupPage