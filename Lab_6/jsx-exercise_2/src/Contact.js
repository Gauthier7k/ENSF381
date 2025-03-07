import logo from './logo.svg';
import './App.css';

function Contact(props) {
  return (
    <div>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    </div>
  );
}

export default Contact;
