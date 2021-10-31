import './App.css';
import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

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
    </div>
  );
}

export default App;
