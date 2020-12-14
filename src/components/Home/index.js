import { Link } from "react-router-dom";
import "./index.css";

const Home=()=>{
    return(
      <div className="Home">
        <h1 className="Header">JavaScript in Action</h1>
        <p>This is JS Fundamentals</p>
        <h1>{`{-_-}`}</h1>
        <img className='Gif' src={'https://i.gifer.com/3mqk.gif'} alt="loading..." />
       <div className='Links'>
       <Link to='/bubbling_capturing'>Bubbling & Capturing</Link>
        <Link to='/event_delegation'>Event Delegation</Link>
        <Link to='/debouncing_throttling'>Debouncing & Throttling</Link>
        <Link to='/storage'>Storage</Link>

         </div>
  </div>
  
    )
  }

  export default Home;