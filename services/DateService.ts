import { Dates } from "shared/types/Dates";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const dateAPI = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_DOMAIN }),
    tagTypes: ['Dates'],
    endpoints: (build) => ({
        fetchAllDates: build.query<Dates[], { currentIndex: number }>({
            query: ({ currentIndex }) => {

                const datesLimit = 10;

                return {
                    url: '/dates',
                    params: {
                        dataId: currentIndex + 1,
                        _limit: datesLimit,
                    }
                }
            },
            providesTags: result => ['Dates']
        }),
    })
});