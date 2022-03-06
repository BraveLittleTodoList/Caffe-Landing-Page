import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Hero from './Components/Hero';

function App() {
  return (
    <Router>
      <Hero></Hero>
    </Router>
  );
}

export default App;
