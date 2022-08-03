import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';


const SingleFriend = ({isOnline = false, avatar = '', name = ''}) => {
    return (
        <li className={styles.item}>
            <span className={isOnline ? styles.statusOnline : styles.statusOfline}></span>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    )
}

SingleFriend.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default SingleFriend