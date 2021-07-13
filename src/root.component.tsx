import { Route, BrowserRouter, Link } from 'react-router-dom';

export default function Root(props) {
  return (
    <BrowserRouter>
      <Route path="/" component={App}/>
    </BrowserRouter>
  );
}

const App = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
    }}>
      <Link to={'user'}><h2>user</h2></Link>
      <Link to={'body'}><h2 style={{marginLeft: '20px'}}>body</h2></Link>
    </div>
  );
}