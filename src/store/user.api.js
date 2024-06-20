import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_API_URL }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    fetchUsers: builder.query({
      query: ({ page, count }) => `/users?page=${page}&count=${count}`,
    }),
    fetchUserById: builder.query({
      query: ({ id }) => `/users/${id}`,
    }),
    registerUser: builder.mutation({
      query: (userData) => {
        const formData = new FormData();
        formData.append('name', userData.name);
        formData.append('email', userData.email);
        formData.append('phone', userData.phone);
        formData.append('position_id', userData.position_id);
        formData.append('photo', userData.photo);

        return {
          url: '/users',
          method: 'POST',
          headers: {
            Token: userData.token,
          },
          body: formData,
        };
      },
    }),
  }),
});

export const { useFetchUsersQuery, useRegisterUserMutation } = userApi;
