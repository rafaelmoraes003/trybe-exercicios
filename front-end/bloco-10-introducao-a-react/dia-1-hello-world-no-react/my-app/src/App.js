import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const commitments = ['Wake up', 'Gym', 'Study', 'Sleep']
  return commitments.map((element) => {
    return Task(element)
  })
}

export default App;
