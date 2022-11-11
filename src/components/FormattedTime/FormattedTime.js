import styles from './FormattedTime.module.scss';

const FormattedTime = props => {
    return (
        <div className={styles.timer}>
            <span>{('0' + Math.floor((props.time / 360000) % 24)).slice(-2)}:</span>
            <span>{('0' + Math.floor((props.time / 6000) % 60)).slice(-2)}:</span>
            <span>{('0' + Math.floor((props.time / 100) % 60)).slice(-2)}.</span>
            <span>{('0' + (props.time / 0.1) % 1000).slice(-3)}</span>
        </div>
    )
}

export default FormattedTime;