'use client';

import { useState } from "react";
import { Dates, DiskTypes, getFieldMaxValue, getFieldMinValue, screenWidth } from "shared";
import { useWindowSize } from "hooks";
import { getCirclesData } from "./store/SectionsTtleDisk";
import { SectionsTtleDisk } from "..";

export const CarouselWrapper = ({ dates }: { dates: Dates[] }) => {
    const [circleIndex, setCircleIndex] = useState<number>(0);

    const [width] = useWindowSize();

    const { data, error, isLoading } = getCirclesData(circleIndex);

    const currentDayes = data ? data : dates;

    const circleClickHandler = (num: number) => () => setCircleIndex(num - 1);

    const prevAngle = () => setCircleIndex(state => --state);

    const nextAngle = () => setCircleIndex(state => ++state);

    const isScreen = width <= screenWidth;

    const minValue = getFieldMinValue('date', data)?.date;

    const maxValue = getFieldMaxValue('date', data)?.date;

    const isVisiblePreloader: string = isLoading ? 'flex' : 'none';
    const isVisibleContent: string = isLoading ? 'none' : 'flex';

    const dataToSend: DiskTypes = {
        data: currentDayes, error, width, isScreen, isVisiblePreloader,
        minValue, maxValue, isLoading, circleIndex, isVisibleContent,
        prevAngle, nextAngle, circleClickHandler
    };

    return <div>
        <SectionsTtleDisk {...dataToSend} />
    </div>;

}