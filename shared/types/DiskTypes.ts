import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { Dates } from "./Dates";

export type DiskTypes = {
    data: Dates[] | undefined;
    width: number;
    minValue: number;
    maxValue: number;
    isScreen: boolean;
    isLoading: boolean;
    circleIndex: number;
    error: FetchBaseQueryError | SerializedError | undefined;
    circleClickHandler: (num: number) => () => void;
}