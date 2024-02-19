import styles from './SectionsTtleDisk.module.scss';
import { MainTitle } from './components/MainTitle/MainTitle';
import { useWindowSize } from 'hooks';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCircleIndex } from 'services';
import { RootState } from 'store';
import { DiskCrcles } from './components/DiskCrcles/DiskCrcles';
import { getCirclesData } from '../../store/SectionsTtleDisk';
import { screenWidth } from 'shared';


export const SectionsTtleDisk = () => {
    const circleIndex = useSelector((state: RootState) => state.circleState.index);

    const dispatch = useDispatch();

    const [width] = useWindowSize();

    const { data: dates, error, isLoading } = getCirclesData(circleIndex);

    const circleClickHandler = (num: number) => () => {
        dispatch(setCircleIndex(num - 1));
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainWrapper}>
                <div className={styles.mainBorder}>
                    <div className={styles.circleContainer}>

                        <MainTitle />

                        <div className={styles.mainContent}>

                            {width <= screenWidth
                                ? <div
                                    className={styles.dataTitle}
                                >
                                    {dates?.at(0)?.title}
                                </div>
                                : <DiskCrcles
                                    width={width}
                                    title={dates?.at(0)?.title}
                                    currentIndex={circleIndex}
                                    circleClickHandler={circleClickHandler}
                                />
                            }

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}