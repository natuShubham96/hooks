import {useState} from 'react';

function App() {
  const [count,setCount] = useState(0);

  const incremetCount = () => {
    setCount(count+1);
  }

  return (
    <div className="App">
      <button onClick={incremetCount}>Button clicked {count} times</button>
    </div>
  );
}

export default App;
