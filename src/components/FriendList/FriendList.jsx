import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';

const FriendList = ({ friends = [] }) => {
    return (
        <ul>
            {friends.map(el => {
                const { id = '', isOnline = false, avatar = '', name = '' } = el;
                return <FriendListItem key={id} isOnline={isOnline} avatar={avatar} name={name} />
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