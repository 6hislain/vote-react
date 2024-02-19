import { CombinedState } from "@/store/index";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const voteApi = createApi({
  reducerPath: "vote-api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API + "/vote",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as CombinedState).auth?.token;
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getVotes: builder.query({
      query: ({ skip, limit }) => ({
        url: `?skip=${skip}&limit=${limit}`,
        method: "GET",
      }),
    }),
    getVote: builder.query({
      query: ({ id }) => ({ url: `/${id}`, method: "GET" }),
    }),
    addVote: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        formData: true,
        body,
      }),
    }),
    editVote: builder.mutation({
      query: ({ id, body }) => ({
        url: `/${id}`,
        method: "PUT",
        formData: true,
        body,
      }),
    }),
    deleteVote: builder.mutation({
      query: ({ id }) => ({ url: `/${id}`, method: "DELETE" }),
    }),
  }),
});

export const {
  useGetVoteQuery,
  useGetVotesQuery,
  useAddVoteMutation,
  useEditVoteMutation,
  useDeleteVoteMutation,
} = voteApi;
