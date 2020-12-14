import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

const StoragePage =()=>{
    const [userName,setuserName]=useState('');
    const [obj,setObj]=useState({id:1,name:'amit'});
    const storeArrData = () => {
        const str=JSON.stringify(obj);
localStorage.setItem('obj-copy',str);
const objval=localStorage.getItem('obj-copy');
console.log(objval);
console.log(JSON.parse(objval));
        // console.log(str);
      };

    const storeData = e => {
        // e.persist();
        setuserName(e.target.value);
      };
    // useState is async function.
    // When you use useState inside functional Component, 
    // we handle variable in useEffect to see change of variable like this...
      useEffect(() => {
        console.log("message inside useEffect: ", userName);
        localStorage.setItem('name',userName);
      }, [userName]);

    return(
        <div style={{display:"flex",
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center'}}>
            <h1> Local Storage</h1>
            <h2>open application tab and Console </h2>
            <p>Simple string store👇</p>
           <input type="text" onChange={storeData}/>
           {/* <input type="text" onChange={storeArrData}/> */}
           {userName}
           <h4 style={{cursor:'pointer'}}onClick={storeArrData}>click for Obj Storage-Hardcoded</h4>
           <h5 style={{cursor:'pointer'}} onClick={()=>localStorage.clear()}>clear browser local storage</h5>
            <Link to='/CoreJS_in_ReactJS'>Home</Link>
        </div>
    )
}

export default StoragePage;
