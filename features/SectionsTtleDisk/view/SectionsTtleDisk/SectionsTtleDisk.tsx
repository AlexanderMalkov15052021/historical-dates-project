import styles from './SectionsTtleDisk.module.scss';
import { MainTitle } from './components/MainTitle/MainTitle';
import { DiskCrcles } from './components/DiskCrcles/DiskCrcles';
import { DiskTypes, Preloader, finalColor, preloaderSize, startColor } from 'shared';
import { ErrorComponent } from './components/ErrorComponent/ErrorComponent';
import { AnimatedNumbers } from './components/AnimatedNumbers/AnimatedNumbers';
import { ControlBlock } from './components/ControlBlock/ControlBlock';
import { SwiperCarousel } from 'features';

export const SectionsTtleDisk = (props: DiskTypes) => {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainWrapper}>
                <div className={styles.mainBorder}>
                    <div className={styles.circleContainer}>

                        <MainTitle />

                        <div
                            style={{ display: props.isVisiblePreloader }}
                            className={styles.mainContent}
                        >
                            <Preloader size={preloaderSize} />
                        </div>

                        <div
                            style={{ display: props.isVisibleContent }}
                            className={styles.mainContent}
                        >

                            <div className={styles.numbersContainer}>

                                <AnimatedNumbers
                                    color={startColor}
                                    count={props.minValue}
                                />

                                <AnimatedNumbers
                                    color={finalColor}
                                    count={props.maxValue}
                                />

                            </div>

                            {props.isScreen
                                ? <div
                                    className={styles.dataTitle}
                                >
                                    {props.data?.at(0)?.title}
                                </div>
                                : <DiskCrcles
                                    width={props.width}
                                    title={props.data?.at(0)?.title}
                                    currentIndex={props.circleIndex}
                                    circleClickHandler={props.circleClickHandler}
                                />
                            }

                            <ControlBlock
                                currentIndex={props.circleIndex}
                                prevAngle={props.prevAngle}
                                nextAngle={props.nextAngle}
                            />

                            <SwiperCarousel
                                width={props.width}
                                dates={props.data}
                                currentIndex={props.circleIndex}
                            />

                        </div>

                        {
                            props.error
                                ? <ErrorComponent />
                                : ''
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}