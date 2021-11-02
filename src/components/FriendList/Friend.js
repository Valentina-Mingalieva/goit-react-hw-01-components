import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function Friend({ id, isOnline, name, avatar }) {
  return (
    <li key={id} className={s.item}>
      {isOnline ? (
        <span className={s.online}></span>
      ) : (
        <span className={s.offline}></span>
      )}
      <img className={s.avatar} src={avatar} alt="foto" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

Friend.propTypes = {
  /* id: PropTypes.number.isRequired, */
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};

export default Friend;
