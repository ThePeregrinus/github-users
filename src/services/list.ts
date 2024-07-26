import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
}

interface ApiResponse {
  total_count: number;
  incomplete_results: boolean;
  items: User[];
}

interface UserQuery {
  username?: string;
  page?: number;     
  per_page?: number;  
}

const baseUrl = 'https://api.github.com/search/'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    listUsers: builder.query<ApiResponse, UserQuery>({
      query: ({username ,page = 1, per_page=4}) => `users?q=${username ? username : 'Jonh'}&per_page=${per_page}&page=${page}`,
    }),
  }),
})

export const { useListUsersQuery } = api