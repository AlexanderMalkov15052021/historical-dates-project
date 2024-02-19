import { animated, SpringValue } from '@react-spring/web';
import styles from './AnimatedCircle.module.scss';

type Props = {
    circleRadius: number;
    springValue: SpringValue<number>;
    angle: number;
    num: number;
    selectedNum: number;
    title?: string;
    circleClickHandler: (num: number) => () => void;
}

export const AnimatedCircle = ({ title, circleRadius, springValue, angle, num, selectedNum, circleClickHandler }: Props) => {

    return (
        <animated.div
            className={
                selectedNum === num
                    ? `${styles.animatedCircleWrapper} ${styles.selectedCircle}`
                    : `${styles.animatedCircleWrapper}`
            }

            style={{
                top: springValue.to(x => Math.sin(x + angle) * circleRadius),
                left: springValue.to(x => Math.cos(x + angle) * circleRadius),
            }}

        >
            <div
                className={
                    selectedNum === num
                        ? `${styles.title} ${styles.selectedTitle}`
                        : `${styles.title}`
                }
            >
                {title}
            </div>
            <div className={`${styles.animatedCircle}`}></div>
            <div onClick={circleClickHandler(num)} className={styles.circleTrigger}></div>
            <span className={`${styles.circleNum}`}>{num}</span>
        </animated.div>
    )
}