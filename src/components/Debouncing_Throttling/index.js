import { Link } from 'react-router-dom';
import './index.css';

const Debouncing_Throttling =()=>{
let counter=0;
const getData=(e)=>{
    
console.log('getting data...',counter++); 
}
const debounceMethod =(fn,d)=>{
    let timer;
    return ()=>{
     
        clearTimeout(timer)
        timer = setTimeout(()=>{
            getData()
        },d)
    }
}
const debounce = debounceMethod(getData,1000)

const expensive=()=>{
    console.log("Expensive");
}

const throttleMethod=(fn,limit)=>{
    let flag=true;
    return ()=>{
        if(flag){
            expensive();
            flag=false;
            setTimeout(()=>{
                flag=true;
            },limit)
        }
    }
}
const throttle = throttleMethod(expensive,1000);
    return(
        <div  className='Debouncing'>
            <h1>Debouncing & Throttling Page </h1>
            <h4>Debouncing search input example </h4>
            <input type="text" onChange={debounce}/>
            <h4>Throttling button example</h4>
            <button onClick={throttle}>Throttling</button>
            <p>open console and check output delay to understand</p>
            <Link to='/CoreJS_in_ReactJS'>Go to Home</Link>       
             </div>
        
        
    )
}

export default Debouncing_Throttling;