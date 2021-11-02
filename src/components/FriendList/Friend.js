import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function Friend({ friend }) {
  return (
    <li key={friend.id} className={s.item}>
      {friend.isOnline ? (
        <span className={s.online}></span>
      ) : (
        <span className={s.offline}></span>
      )}
      <img className={s.avatar} src={friend.avatar} alt="foto" width="48" />
      <p className={s.name}>{friend.name}</p>
    </li>
  );
}

Friend.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default Friend;
