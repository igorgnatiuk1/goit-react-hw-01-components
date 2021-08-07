import React from "react";
import PropTypes from 'prop-types';
import styles from './Statistics.module.css'

const Statistic = ({ title, stats }) => (
    <section className={styles.statistics}>
        {{ title } && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.statList}>
            {stats.map(({id, color, label, percentage}) => (
                <li
                    key={id}
                    className={styles.item}
                    style={{ backgroundColor: color }}
                >
                    <span className={styles.label}>{label}</span>
                    <span className={styles.percentage}>{percentage}%</span>
                </li>
            ))}
        </ul>
    </section>
);

export default Statistic;
Statistic.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object),
};