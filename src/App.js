import {useState, useEffect} from 'react';  //useEffect is used to handle side effects or for interacting with outer things like API

function App() {
  const [count,setCount] = useState(0); //useState() returns an updater function along with set function, which has access to previous state value
  const [toggle,setToggel] = useState(false);

  useEffect(() => {
    document.title = `Clicked - ${count} times`;
  })   //useEffect gets called everytime after render executes.

  const incremetCount = () => {
    setCount(prevCount => prevCount+1);
  }

  const toggleChange = () => {
    setToggel(prevToggel => !prevToggel);
  }

  return (
    <>
    <div className="App">
      <button onClick={incremetCount}>Button clicked {count} times</button>
    </div>
    <div onClick={toggleChange} style={{height: "50px", width: "50px", background: toggle? "yellow" : "grey"}}/>
    </>
  );
}

export default App;
