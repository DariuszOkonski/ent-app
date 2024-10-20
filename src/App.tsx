import './App.css';
import Button from './components/Button/Button';

const cities = ['New York', 'Los Angeles', 'San Francisco'];

function App() {
  const handleOnSelect = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Button onClickCallback={() => console.log('click me')}>My Button</Button>
    </div>
  );
}

export default App;
