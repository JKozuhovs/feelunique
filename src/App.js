import './App.css';
import NavBar from './components/NavBar'
import FlagPopUp from './components/FlagPopUp'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    <main>
      <div id="main">
        <NavBar />
        {/* <FlagPopUp /> */}

      </div>
    </main>
    </div>
  );
}

export default App;
