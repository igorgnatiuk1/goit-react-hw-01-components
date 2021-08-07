import React from "react";
import style from './Friends.module.css'
import PropTypes from 'prop-types';

const Friend = ({friend}) => (
    <ul className={style.friend}>
        {friend.map(({id, isOnline, avatar, name}) => (
            <li
                key={id}
                className={style.item} >
                <span className={isOnline ? style.green : style.red}></span>
                <img className={style.avatar} src={avatar} alt={name} width="70"/>
                <p className={style.name}>{name}</p>
            </li>
        ))}
    </ul>
)
export default Friend;
Friend.propTypes = {
    friend: PropTypes.arrayOf(PropTypes.object),
};