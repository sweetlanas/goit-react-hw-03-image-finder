import PropTypes from 'prop-types';
import user from '../../user.json';
import s from './Profile.module.css'




const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img
          src={user.avatar}
          alt="Аватар пользователя"
          className={s.avatar}
          width="100"
        />
        <p className="name">{user.name}</p>
        <p className="tag">@{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{user.stats.followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{user.stats.views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  )
};

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.number,
}

export default Profile;