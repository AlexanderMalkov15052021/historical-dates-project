import styles from './AnimatedNumbers.module.scss';
import { useSpring, animated } from '@react-spring/web';

type Props = {
    color: string;
    count?: number;
}

export const AnimatedNumbers = ({ color, count = 0 }: Props) => {

    const props = useSpring({ val: count, from: { val: 0 } });

    return (
        <div className={styles.animatedNumsContainer}>
            <animated.div className={styles.animatedNum} style={{ color: color }}>
                {props.val.to(num => Math.floor(num))}
            </animated.div>
        </div>
    );
}