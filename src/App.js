import {useState, useEffect} from 'react';  //useEffect is used to handle side effects or for interacting with outer things like API

function App() {
  const [count,setCount] = useState(0); //useState() returns an updater function along with set function, which has access to previous state value
  const [toggle,setToggel] = useState(false);
  const [mousePosition, setMousePosition] = useState({x: null, y: null}); //Using useState to add an object to state
  const [status, setStatus] = useState(navigator.onLine);

  useEffect(() => {
    document.title = `Clicked - ${count} times`;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    }
  }, [count])   //useEffect gets called everytime after render executes.

  // To make useEffect behave like componentWillUnmount, we return a funtion from it, this function is returned everytime before a render, to cleanup effects of previous render and when component unmounts
  //To prevent useEffect being called after and before every render, we can pass a second argument, which is an array of dynamic static values which are changing, if we keep it empty, then impact of state change will not be visible as when we return from useEffect previous render changes are flushed.

  const incremetCount = () => {
    setCount(prevCount => prevCount+1);
  }

  const handleOnline = () => {
    setStatus(true);
  }

  const handleOffline = () => {
    setStatus(false);
  }

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.x,
      y: event.y
    })
  }

  const toggleChange = () => {
    setToggel(prevToggel => !prevToggel);
  }

  return (
    <>
    <h2>Handle Counter!!</h2>
    <div>
      <button onClick={incremetCount}>Button clicked {count} times</button>
    </div>
    <h2>Toggle Colour!!!</h2>
    <div onClick={toggleChange} style={{height: "50px", width: "50px", background: toggle? "yellow" : "grey"}}/>
    <h2>Mouse Position</h2>
    <h3>{`x - ${mousePosition.x}`}</h3>
    <h3>{`y - ${mousePosition.y}`}</h3>
    <h2>{`Network Status!!! ${status}`}</h2>
    </>
  );
}

export default App;
