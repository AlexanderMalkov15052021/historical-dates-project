import { ArrowLeft, initialCircleCount } from 'shared';
import { ArrowRight } from 'shared';
import styles from './ControlBlock.module.scss';

type Props = {
    currentIndex: number;
    prevAngle: () => void;
    nextAngle: () => void;
}

export const ControlBlock = ({ currentIndex, prevAngle, nextAngle }: Props) => {

    return (
        <div className={styles.controlBlock}>
            <div>
                {
                    `0${currentIndex + 1}/0${initialCircleCount}`
                }
            </div>
            <div className={styles.btnsBlock}>

                <button
                    className={
                        currentIndex < 1
                            ? `${styles.startBtn} ${styles.disabledBtn}`
                            : `${styles.startBtn}`
                    }
                    disabled={currentIndex < 1}
                    onClick={prevAngle}
                >
                    <ArrowLeft />

                </button>

                <button
                    className={
                        currentIndex >= initialCircleCount - 1
                            ? `${styles.startBtn} ${styles.disabledBtn}`
                            : `${styles.startBtn}`
                    }
                    disabled={currentIndex >= initialCircleCount - 1}
                    onClick={nextAngle}
                >
                    <ArrowRight />

                </button>

            </div>

        </div>
    )
}