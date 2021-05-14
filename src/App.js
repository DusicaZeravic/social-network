import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getUsers } from './service';
import Users from './components/Users';
import UserInfo from './components/UserInfo';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(res => {
      console.log(res.data);
      setUsers(res.data);
    })
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Users users={users} />
        </Route>
        <Route exact path="/:id">
          <UserInfo users={users} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
