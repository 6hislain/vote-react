import { CombinedState } from "@/store/index";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const positionApi = createApi({
  reducerPath: "position-api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API + "/position",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as CombinedState).auth?.token;
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPositions: builder.query({
      query: ({ skip, limit }) => ({
        url: `?skip=${skip}&limit=${limit}`,
        method: "GET",
      }),
    }),
    getPosition: builder.query({
      query: ({ id }) => ({ url: `/${id}`, method: "GET" }),
    }),
    addPosition: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        formData: true,
        body,
      }),
    }),
    editPosition: builder.mutation({
      query: ({ id, body }) => ({
        url: `/${id}`,
        method: "PUT",
        formData: true,
        body,
      }),
    }),
    deletePosition: builder.mutation({
      query: ({ id }) => ({ url: `/${id}`, method: "DELETE" }),
    }),
  }),
});

export const {
  useGetPositionQuery,
  useGetPositionsQuery,
  useAddPositionMutation,
  useEditPositionMutation,
  useDeletePositionMutation,
} = positionApi;
