import './App.css';
import Like from './components/Like';

const cities = ['New York', 'Los Angeles', 'San Francisco'];

function App() {
  return (
    <div>
      <Like onClick={() => console.log('clicked')} />
    </div>
  );
}

export default App;
