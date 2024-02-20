import { ComponentType } from "react";
import { getCirclesData } from "../../store/SectionsTtleDisk";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { Dates, screenWidth } from "shared";
import { setCircleIndex } from "services";
import { useDispatch } from "react-redux";
import { useWindowSize } from "hooks";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

type Props = {
    data: Dates[] | undefined;
    width: number;
    isScreen: boolean;
    isLoading: boolean;
    circleIndex: number;
    error: FetchBaseQueryError | SerializedError | undefined;
    circleClickHandler: (num: number) => () => void;
}

export const PropsDataWrapper = <P extends Props>(Component: ComponentType<P>) => (props: Props) => {
    const circleIndex = useSelector((state: RootState) => state.circleState.index);

    const [width] = useWindowSize();

    const dispatch = useDispatch();

    const { data, error, isLoading } = getCirclesData(circleIndex);

    const circleClickHandler = (num: number) => () => {
        dispatch(setCircleIndex(num - 1));
    }

    const isScreen = width <= screenWidth;

    const dataToSend: Props = {
        data,
        error,
        width,
        isScreen,
        isLoading,
        circleIndex,
        circleClickHandler
    };

    return <Component {...dataToSend as P} />;

}