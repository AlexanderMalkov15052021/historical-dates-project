import Image from 'next/image';
import styles from './Preloader.module.scss';

type Props = {
    size?: number;
}

export const Preloader = ({ size = 1 }: Props) => {
    return (
        <Image
            width={100}
            height={100}
            src="/preloader.svg"
            alt={'preloader'}
            style={{ scale: size }}
            className={styles.svg}
            priority={true}
        />
    )
}