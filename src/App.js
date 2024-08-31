import logo from './logo.svg';
import './App.css';
import {useTimer} from 'use-timer';

function App() {
  const {time,start,pause,reset,status} = useTimer();
  return (
    <>
      <button className="start-button" onClick={start}>Start</button>
  <button className="pause-button"   onClick={pause}>pause </button>
  <button className="reset-button" onClick={reset}>reset </button>
     
    <p> Start timer : {time}</p>
    {status==="RUNNING " && <p>RUNNING</p>}
    </> 

  );
}

export default App;
