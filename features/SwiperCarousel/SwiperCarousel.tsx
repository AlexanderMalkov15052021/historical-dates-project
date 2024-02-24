'use client';

import styles from './SwiperCarousel.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { memo } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { SlideBlock } from './components/SlideBlock/SlideBlock';
import { ArrowLeft, ArrowRight, SwiperCarouselType, distanceBetweenDescriptions, minDescriptionWidth, SwiperWrapperType } from 'shared';
import { SwiperCarouselData } from './hoc/SwiperCarouselData';

const SwiperCarouselLocal = SwiperCarouselData((props: SwiperCarouselType) => {

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.mainContent}>
                <div className={styles.swiperWrapper}>

                    <SwitchTransition>
                        <CSSTransition
                            nodeRef={props.nodeRef}
                            addEndListener={(done: () => void) => {
                                props.nodeRef.current?.addEventListener("transitionend", done, false);
                            }}
                            classNames={{
                                enter: styles.enter,
                                enterActive: styles.enterActive,
                                exit: styles.exit,
                                exitActive: styles.exitActive,
                            }}
                            key={props.currentIndex}
                        >

                            <div
                                ref={props.nodeRef}
                                className={styles.swiperContent}
                            >

                                <div
                                    className={
                                        props.slideIndex === 0
                                            ? `${styles.prevBtn} ${styles.hideBtn} ${props.escapeBtn} prev`
                                            : `${styles.prevBtn} ${props.escapeBtn} prev`
                                    }
                                >
                                    <ArrowLeft />
                                </div>


                                <Swiper
                                    width={props.itemsBlockWidth < minDescriptionWidth ? minDescriptionWidth : props.itemsBlockWidth}
                                    pagination={props.pagination}
                                    modules={[Navigation, Pagination]}
                                    spaceBetween={distanceBetweenDescriptions}
                                    slidesPerView={props.itemCount === 0 ? 1 : props.itemCount}
                                    navigation={{
                                        prevEl: ".prev",
                                        nextEl: ".next"
                                    }}
                                    grabCursor={true}
                                    onSlideChange={props.slideChangeHandler}
                                    className={styles.swiperBlock}
                                >
                                    {
                                        props.dates?.map(obj => <SwiperSlide key={obj.id}>
                                            <SlideBlock
                                                key={obj.id}
                                                date={obj.date}
                                                description={obj.description}
                                            />
                                        </SwiperSlide>)
                                    }
                                </Swiper>

                                {

                                    <div
                                        className={
                                            props.slideIndex === 1 || (props.dates?.length ?? 1) <= props.itemCount
                                                ? `${styles.prevBtn} ${styles.hideBtn} ${props.escapeBtn} next`
                                                : `${styles.prevBtn} ${props.escapeBtn} next`
                                        }
                                    >
                                        <ArrowRight />
                                    </div>

                                }
                            </div>

                        </CSSTransition>

                    </SwitchTransition>
                </div>

            </div>
        </div>
    )
});

export const SwiperCarousel = memo(
    (props: SwiperWrapperType) => <SwiperCarouselLocal
        width={props.width}
        dates={props.dates}
        currentIndex={props.currentIndex}
    ></SwiperCarouselLocal>
);