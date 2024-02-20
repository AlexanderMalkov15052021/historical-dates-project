import styles from './SectionsTtleDisk.module.scss';
import { MainTitle } from './components/MainTitle/MainTitle';
import { DiskCrcles } from './components/DiskCrcles/DiskCrcles';
import { Dates, Preloader, screenWidth } from 'shared';
import { PropsDataWrapper } from '../../hoc/PropsDataWrapper/PropsDataWrapper';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { ErrorComponent } from './components/ErrorComponent/ErrorComponent';

type Props = {
    data: Dates[] | undefined;
    width: number;
    isScreen: boolean;
    isLoading: boolean;
    circleIndex: number;
    error: FetchBaseQueryError | SerializedError | undefined;
    circleClickHandler: (num: number) => () => void;
}

export const SectionsTtleDisk = PropsDataWrapper((props: Props) => {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainWrapper}>
                <div className={styles.mainBorder}>
                    <div className={styles.circleContainer}>

                        <MainTitle />

                        {
                            props.isLoading || props.error
                                ? <div className={styles.mainContent}>
                                    <Preloader size={.5} />
                                </div>
                                : <div className={styles.mainContent}>

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
                                </div>
                        }

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
});