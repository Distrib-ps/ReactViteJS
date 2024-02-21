import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({

    reducerPath: 'api',
    tagTypes: ['Task'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => '/tasks',
            providesTags: ['Task'],
        }),
        addTask: builder.mutation({
            query: (task) => ({
                url: '/tasks',
                method: 'POST',
                body: task,
            }),
            invalidatesTags: ['Task'],
        }),

    }),
});

export const { useGetTasksQuery, useAddTaskMutation } = api;