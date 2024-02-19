import { Dates } from "shared/types/Dates";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const dateAPI = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['Date'],
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
            providesTags: result => ['Date']
        }),
    })
});