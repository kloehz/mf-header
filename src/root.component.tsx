import { Route, HashRouter, Link } from 'react-router-dom';

export default function Root(props) {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

const App = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
    }}>
      <Link to='user'><h2>user</h2></Link>
      <Link to='body'><h2 style={{marginLeft: '20px'}}>body</h2></Link>

      <Route exact path="/" component={Body} />
      <Route path="/user" component={Users} />
    </div>
  );
}

const Body = () => <div><h2>Body</h2></div>
const Users = () => <div><h2>Users</h2></div>