import { FC } from 'react';
import styles from './DiskCrcles.module.scss';
import { AnimatedCircle } from '../AnimatedCircle/AnimatedCircle';
import { useSpring } from '@react-spring/web';
import { getCircleAngles, initialCircleCount } from 'shared';

export const circleAngles = getCircleAngles(initialCircleCount);

type Props = {
    width: number;
    title?: string;
    currentIndex: number,
    circleClickHandler: (num: number) => () => void;
}

export const DiskCrcles: FC<Props> = ({ width, title, currentIndex, circleClickHandler }) => {

    const props = useSpring({
        springValue: circleAngles[currentIndex],
        config: {
            mass: 5,
            friction: 30,
            tension: 120,
        },
    });

    return (
        <div className={styles.mainCircleWrapper}>

            <div style={{ width: width / 4, height: width / 4 }} className={styles.mainCircle}></div>

            {
                circleAngles.map(
                    (angle, index) =>
                        <AnimatedCircle
                            key={index}
                            angle={angle}
                            title={title}
                            circleRadius={width / 8}
                            selectedNum={currentIndex + 1}
                            springValue={props.springValue}
                            num={initialCircleCount - index}
                            circleClickHandler={circleClickHandler}
                        />
                )
            }
        </div>
    )
}