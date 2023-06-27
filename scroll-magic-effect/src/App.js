import logo from './logo.svg';
import './App.css';
import Lottie from "lottie-react";
import Parrot from './Parrot.json'
function App() {
  return (
    <div className="App">
      <Lottie animationData={Parrot}/>
    </div>
  );
}

export default App;
