import { Route } from 'react-router-dom';
import { Router, Link } from "@reach/router"

export default function App() {
  return (
    <Router>
      <Link to={'user'}><h2>user</h2></Link>
      <Link to={'body'}><h2 style={{ marginLeft: '20px' }}>body</h2></Link>
    </Router>
  );
}

// const App = () => {
//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'row',
//     }}>
//       <Link to={'user'}><h2>user</h2></Link>
//       <Link to={'body'}><h2 style={{marginLeft: '20px'}}>body</h2></Link>
//     </div>
//   );
// }