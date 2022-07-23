import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title = '', stats = [] }) => {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.statList}>
                {stats.map((el, ind) => {
                    return <li className={`${styles.item} ${styles['item' + (ind + 1)]}`} key={el.id}>
                        <span className="label">{el.label}</span>
                        <span className="percentage">{el.percentage}%</span>
                    </li>
                })}
            </ul>
        </section>
    )
}

export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired
};