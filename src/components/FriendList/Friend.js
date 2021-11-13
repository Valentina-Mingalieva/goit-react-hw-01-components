import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendList({ friends = [] }) {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id} className={s.item}>
          {friend.isOnline ? (
            <span className={s.online}></span>
          ) : (
            <span className={s.offline}></span>
          )}
          <img className={s.avatar} src={friend.avatar} alt="foto" width="48" />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
