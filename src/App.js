import {useState} from 'react';

function App() {
  const [count,setCount] = useState(0); //useState() returns an updater function along with set function, which has access to previous state value

  const incremetCount = () => {
    setCount(prevCount => prevCount+1);
  }

  return (
    <div className="App">
      <button onClick={incremetCount}>Button clicked {count} times</button>
    </div>
  );
}

export default App;
