import { CombinedState } from "@/store/index";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const candidateApi = createApi({
  reducerPath: "candidate-api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API + "/candidate",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as CombinedState).auth?.token;
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCandidates: builder.query({
      query: ({ skip, limit }) => ({
        url: `?skip=${skip}&limit=${limit}`,
        method: "GET",
      }),
    }),
    getCandidate: builder.query({
      query: ({ id }) => ({ url: `/${id}`, method: "GET" }),
    }),
    addCandidate: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        formData: true,
        body,
      }),
    }),
    editCandidate: builder.mutation({
      query: ({ id, body }) => ({
        url: `/${id}`,
        method: "PUT",
        formData: true,
        body,
      }),
    }),
    deleteCandidate: builder.mutation({
      query: ({ id }) => ({ url: `/${id}`, method: "DELETE" }),
    }),
  }),
});

export const {
  useGetCandidateQuery,
  useGetCandidatesQuery,
  useAddCandidateMutation,
  useEditCandidateMutation,
  useDeleteCandidateMutation,
} = candidateApi;
