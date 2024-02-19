import { CombinedState } from "@/store/index";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const electionApi = createApi({
  reducerPath: "election-api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API + "/election",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as CombinedState).auth?.token;
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getElections: builder.query({
      query: ({ skip, limit }) => ({
        url: `?skip=${skip}&limit=${limit}`,
        method: "GET",
      }),
    }),
    getElection: builder.query({
      query: ({ id }) => ({ url: `/${id}`, method: "GET" }),
    }),
    addElection: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        formData: true,
        body,
      }),
    }),
    editElection: builder.mutation({
      query: ({ id, body }) => ({
        url: `/${id}`,
        method: "PUT",
        formData: true,
        body,
      }),
    }),
    deleteElection: builder.mutation({
      query: ({ id }) => ({ url: `/${id}`, method: "DELETE" }),
    }),
  }),
});

export const {
  useGetElectionQuery,
  useGetElectionsQuery,
  useAddElectionMutation,
  useEditElectionMutation,
  useDeleteElectionMutation,
} = electionApi;
