import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../constant";

const baseQuery = fetchBaseQuery({
  baseUrl: baseURL + "/orders",
  credentials: "include",
  mode: "cors",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery,
  tagTypes: ["Order"],
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: "/",
        method: "POST",
        body: order,
      }),
    }),
    getOrderByEmail: builder.query({
      query: (email) => ({
        url: `/email/${email}`,
        method: "GET",
      }),
      providesTags: ["Order"],
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrderByEmailQuery } = orderApi;
export default orderApi;
