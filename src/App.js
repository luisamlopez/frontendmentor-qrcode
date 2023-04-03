import './App.css';
import { Card } from './components/Card/Card';
import { SearchBar } from './components/SearchBar/SearchBar';

function App() {
  return (
    <div>
      <SearchBar />
      <Card title="" url="" />
    </div>
  );
}

export default App;
