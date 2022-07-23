import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items = [] }) => {
    return (
        <table className={styles['transaction-history']}>
            <thead>
                <tr className={styles.header_wrapper}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((el, ind) => {
                    return <tr className={ind % 2 === 0 ? styles.rowWhite : styles.rowGray} key={el.id}>
                        <td>{el.type}</td>
                        <td>{el.amount}</td>
                        <td>{el.currency}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default TransactionHistory

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired
};