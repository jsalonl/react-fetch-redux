import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
    timeout: 2000
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users?limit=10'
    }),
    getUser: builder.query({
      query: (id) => `/users/${id}`
    })
  })
})

export const { useGetUsersQuery, useGetUserQuery } = userApi