import './App.css';
import ListGroup from './components/ListGroup';

const cities = ['New York', 'Los Angeles', 'San Francisco'];

function App() {
  const handleOnSelect = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup heading='Miami' items={cities} onSelectItem={handleOnSelect} />
    </div>
  );
}

export default App;
