import logo from './logo.svg';
import './App.css';



function App() {

  const currentYear= new Date();
  const isLoggedIn= false;
  
  function MyComponent(isLoggedIn) {
    if (isLoggedIn) {
    return <p>Welcome, user!</p>;
    } else {
    return <p>Please log in.</p>;
    }
    }

  return (
    <div>
      <h1>ENSF381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>{currentYear.getFullYear()}</p>
      {MyComponent(isLoggedIn)}
      </div>
  );
}

export default App;
