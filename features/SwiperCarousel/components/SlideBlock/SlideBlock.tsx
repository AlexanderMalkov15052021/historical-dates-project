import styles from './SlideBlock.module.scss';

type Props = {
    date: number,
    description: string
}

export const SlideBlock = ({ date, description }: Props) => {

    return (
        <div className={styles.sliderWrapper}>
            <div className={styles.date}>
                {date}
            </div>
            <div className={styles.description}>
                {description}
            </div>
        </div>
    );
}