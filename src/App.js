import './App.css';
import Counter from './components/state and events/counter';

function App() {
  return (
   <div>
    <Counter increment={1} clr={"orange"}/>
    <Counter increment={2} clr={"blue"}/>
    <Counter increment={3} clr={"green"}/>

   </div>
  );
}

export default App;
