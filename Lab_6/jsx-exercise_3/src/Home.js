import logo from './logo.svg';
import './App.css';

function Home(props) {
  return (
    <div>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    </div>
  );
}

export default Home;
