import logo from './logo.svg';
import './App.css';
import About from './About';
import Home from './Home';
import Contact from './Contact'
import EngineeringTopics from './EngineeringTopics';

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
      <Home title="Home Page" description="Welcome to our website." />
      <Contact title="Contact Page" description="We are passionate about delivering quality experiences." />
      <About title="About Page" description="Feel free to reach out to us via email or phone." />

      <p>{currentYear.getFullYear()}</p>
      {MyComponent(isLoggedIn)}
      <EngineeringTopics/>
    </div>
  );
}



export default App;