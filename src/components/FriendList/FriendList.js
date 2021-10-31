import styles from './FriendList.module.css';

function FriendList({ options }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Color Picker</h2>
      <div>
        {options.map(option => (
          <span
            key={option.label}
            className={styles.option}
            style={{ backgroundColor: option.color }}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default FriendList;
