import './App.css';
import { Header } from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <div className='container-description'>
          <h1 className='container-text'>If you start investing ___$ every month, in ___ years you can buy...</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
