import { RefObject } from "react";
import { Dates } from "..";
import { Swiper as SwiperType } from 'swiper';


export type SwiperCarouselType = {
    width: number;
    dates?: Dates[];
    escapeBtn: string;
    nodeRef: RefObject<HTMLInputElement>;
    itemCount: number;
    slideIndex: number;
    currentIndex: number;
    itemsBlockWidth: number;
    pagination: {
        clickable: boolean;
        renderBullet: (_: number, className: string) => string;
    };
    slideChangeHandler: (evt: SwiperType) => void;
}