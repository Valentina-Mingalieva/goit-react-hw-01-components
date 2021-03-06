import './App.css';

import Profile from './components/Profile/Profile';
import user from './data-sets/user.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './data-sets/statistical-data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './data-sets/friends.json';

import TransactionHistory from './components/TransactionHistory/Transactions';
import transactions from './data-sets/transactions.json';

function App() {
  return (
    <div className="App">
      <h2>Task 1</h2>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2>Task 2</h2>
      <Statistics title={statisticalData.title} stats={statisticalData} />
      <h2>Task 3</h2>
      <FriendList friends={friends} />
      <h2>Task 4</h2>
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
