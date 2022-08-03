import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ username = '', tag = '', location = '', avatar = '', stats = {} }) => {
    const { followers = 0, likes = 0, views = 0 } = stats;
    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                    src={avatar ? avatar : "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"}
                    alt="User avatar"
                    className={styles.avatar}
                />
                <p className={styles.name}>{username}</p>
                <p className={styles.tag}>{tag ? `@${tag}` : ''}</p>
                <p className={styles.location}>{location}</p>
            </div>

            <ul className={styles.stats}>
                <li className={styles.statsLiWithBorder}>
                    <span className="label">Followers</span>
                    <span className="quantity">{followers}</span>
                </li>
                <li className={styles.statsLiWithBorder}>
                    <span className="label">Views</span>
                    <span className="quantity">{views}</span>
                </li>
                <li className={styles.statsLi}>
                    <span className="label">Likes</span>
                    <span className="quantity">{likes}</span>
                </li>
            </ul>
        </div>
    )
}

export default Profile;

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    }).isRequired,
};