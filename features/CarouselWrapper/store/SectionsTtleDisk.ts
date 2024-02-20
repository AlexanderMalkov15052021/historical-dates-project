import { dateAPI } from "services/DateService";

export const getCirclesData = (index: number) => {
    const data = dateAPI.useFetchAllDatesQuery({ currentIndex: index });

    // here is the logic for interacting with data

    return data;
}
