import styles from './ErrorComponent.module.scss';

export const ErrorComponent = () => {
    return (
        <div className={styles.error}>Произошла ошибка загрузки данных!</div>
    )
}