import React from "react";
import PropTypes from 'prop-types';
import style from './Transaction.module.css'

const Transaction = ({items}) => (
    <table className={style.history}>
        <thead className={style.thead}>
        <tr>
            <th className={style.th}>Type</th>
            <th className={style.th}>Amount</th>
            <th className={style.th}>Currency</th>
        </tr>
        </thead>
        <tbody className={style.tbody}>
        {items.map (({id, type, amount, currency}) => (

            <tr key={id} className={style.tr}>
                <td className={style.td}>{type}</td>
                <td className={style.td}>{amount}</td>
                <td className={style.td}>{currency}</td>
            </tr>

        ))
        }

        </tbody>
    </table>
)

export default Transaction
Transaction.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
};