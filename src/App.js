// import Columns from './components/Columns';
import './App.css';
import Columns from './components/Columns';
// import bg from './components/bg.jpeg'
function App() {
  return (<>
    <div className='AppHeader' style={{backgroundImage:`url("https://blog.openreplay.com/images/zustand-state-management-for-react/images/hero.png")` }}>  <h3>Kanban App</h3>
    <h5>using Zustand state management library</h5>
    </div>
    <div className="App" >
     <Columns  state={'PLANNED'}/>
     <Columns  state={'ONGOING'}/>
     <Columns state={'DONE'}/>
    </div>
    </>
  );
}

export default App;
