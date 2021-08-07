import React from "react";
import PropTypes from 'prop-types';
import style from './Profile.module.css'




const Profile = ({name, followers,avatar, tag, likes, location, views}) => (
    <div className={style.profile}>
        <div className="description">
            <img
                src={avatar}
                alt="Аватар пользователя"
                className={style.avatar}
            />
            <p className={style.name}>{name}</p>
            <p className={style.tag}>@{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className={style.stats}>
            <li>
                <span className={style.label}>Followers</span>
                <span className={style.quantity}>{followers}</span>
            </li>
            <li>
                <span className={style.label}>Views</span>
                <span className={style.quantity}>{views}</span>
            </li>
            <li>
                <span className={style.label}>Likes</span>
                <span className={style.quantity}>{likes}</span>
            </li>
        </ul>
    </div>
)

export default Profile;
Profile.defaultProps = {
    avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg ',
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,

};