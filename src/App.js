import './App.css';
import NavBar from './components/NavBar'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    <main>
      <NavBar />
    </main>
    </div>
  );
}

export default App;
