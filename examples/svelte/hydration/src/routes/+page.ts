import { dehydrate, QueryClient } from '@tanstack/svelte-query'
import { getPosts, limit } from '$lib/data.js'

/** @type {import('./$types').PageLoad} */
export async function load() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['posts', limit], () => getPosts(limit))
  return {
    dehydratedState: dehydrate(queryClient),
  }
}