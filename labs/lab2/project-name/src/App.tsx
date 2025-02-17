import './App.css'
import {Test} from "./components/Test";

function App(){
  return (
    <div>
      <h2>Welcome to my first react application</h2>
      <div>look at my custom content</div>
      <div>
        <Test name="louis" age={21} major="cs"/>
      </div>
    </div>
  )
}

export default App