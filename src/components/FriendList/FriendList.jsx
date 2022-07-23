import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends = [] }) => {

    return (
        <ul className={styles['friend-list}']}>
            {friends.map(el => {
                return <li className={styles.item} key={el.id}>
                    <span className={el.isOnline ? styles.statusOnline : styles.statusOfline}></span>
                    <img className={styles.avatar} src={el.avatar} alt="User avatar" width="48" />
                    <p className={styles.name}>{el.name}</p>
                </li>
            })}
        </ul>
    )
}

export default FriendList

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })).isRequired
};