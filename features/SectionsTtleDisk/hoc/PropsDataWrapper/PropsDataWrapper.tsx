import { ComponentType } from "react";
import { getCirclesData } from "../../store/SectionsTtleDisk";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { DiskTypes, getFieldMaxValue, getFieldMinValue, screenWidth } from "shared";
import { setCircleIndex } from "services";
import { useDispatch } from "react-redux";
import { useWindowSize } from "hooks";

export const PropsDataWrapper = <P extends DiskTypes>(Component: ComponentType<P>) => (props: DiskTypes) => {
    const circleIndex = useSelector((state: RootState) => state.circleState.index);

    const [width] = useWindowSize();

    const dispatch = useDispatch();

    const { data, error, isLoading } = getCirclesData(circleIndex);

    const circleClickHandler = (num: number) => () => {
        dispatch(setCircleIndex(num - 1));
    }

    const isScreen = width <= screenWidth;

    const minValue = getFieldMinValue('date', data)?.date;
    const maxValue = getFieldMaxValue('date', data)?.date;

    const dataToSend: DiskTypes = {
        data,
        error,
        width,
        isScreen,
        minValue,
        maxValue,
        isLoading,
        circleIndex,
        circleClickHandler
    };

    return <Component {...dataToSend as P} />;

}