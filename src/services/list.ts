import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ApiResponse, ReposQuery, UserQuery } from './types'
const baseUrl = 'https://api.github.com/'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    listUsers: builder.query<ApiResponse, UserQuery>({
      query: ({username ,page = 1, per_page=4}) => `search/users?q=${username ? username : 'Jonh'}&per_page=${per_page}&page=${page}`,
    }),



    listRepos: builder.query<Array<any>, ReposQuery >({
      query: ({username}) => `users/${username}/repos`,
    }),
  }),
})

export const { useListUsersQuery,  useListReposQuery } = api