import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch} from "react-redux"


function App() {
  const dispatch = useDispatch();
  const idk = useSelector ((state)=>state.counter)
  //console.log(couter.couter)

  const setter = (indicator)=>{
    if(indicator === "+"){
      //increase
      dispatch({type:"INCREASE", payload:counter.counter +1});
    } else if (indicator === "-"){
      //decrease
      dispatch({type:"DECREASE", payload:counter.counter-1});
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{counter.counter}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
