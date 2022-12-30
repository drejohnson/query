/* istanbul ignore file */

// Re-export core
export * from '@tanstack/query-core'

// Svelte Query
export * from './types'
export { setQueryClient } from './context'
export { useQueryClient } from './useQueryClient'
export { useQuery } from './useQuery'
export { useQueries } from './useQueries'
export { useMutation } from './useMutation'
export { useInfiniteQuery } from './useInfiniteQuery'
export { useHydrate } from './useHydrate'
export { useIsFetching } from './useIsFetching'
export { useIsMutating } from './useIsMutating'