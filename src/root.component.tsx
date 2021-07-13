import { Link } from "@reach/router"

export default function App() {
  return (
    <>
      <Link path='user'>User</Link>
      <Link path='body'>Home</Link>
    </>
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