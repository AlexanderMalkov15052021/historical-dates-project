import { ComponentType, useEffect, useRef, useState } from "react";
import { Dates, SwiperCarouselType, minDescriptionWidth, minDescriptionWidthForMobile, screenWidth, SwiperWrapperType } from "shared";
import { Swiper as SwiperType } from 'swiper';
import styles from '../SwiperCarousel.module.scss';

export const SwiperCarouselData = <P extends SwiperCarouselType>(Component: ComponentType<P>) =>
    ({ width, dates, currentIndex }: SwiperWrapperType) => {

        const nodeRef = useRef<HTMLInputElement>(null);

        const [slideIndex, setSlideIndex] = useState<number>(0);

        const slideChangeHandler = (evt: SwiperType) => {
            setSlideIndex(evt.progress);
        }

        useEffect(() => {
            return () => setSlideIndex(0);
        }, [dates]);

        const blockWidth = width > screenWidth ? minDescriptionWidth : minDescriptionWidthForMobile;
        const seventyPercentScreenWidth = width / 10 * 7;  // 70% width
        const btnWidth = (53 + 15 * 2) * 2; // padding, margin, width
        const itemsBlockWidth = seventyPercentScreenWidth - btnWidth;

        const itemCount = Math.floor(itemsBlockWidth / blockWidth);

        const pagination = {
            clickable: true,
            renderBullet: (_: number, className: string) => {
                return '<span class="' + className + '"></span>';
            },
        };

        const escapeBtn: string = width > screenWidth ? '' : styles.escapeBtn;

        const dataToSend = {
            width, dates, nodeRef, itemCount, escapeBtn,
            slideIndex, pagination, currentIndex,
            itemsBlockWidth, slideChangeHandler
        }

        return <Component {...dataToSend as P} />;
    }