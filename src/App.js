import './App.css';

import Landing from './components/Landing';

function App() {
if(navigator.onLine === false){
  alert("you are disconnected!please connect your internet")
}
  return (
    <div className='App'>
      <Landing/>
    </div>
  );
}

export default App;
