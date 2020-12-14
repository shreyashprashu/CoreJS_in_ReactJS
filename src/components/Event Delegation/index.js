import { Link } from 'react-router-dom';
// import {useState} from 'react';
import './index.css';


const EventDelegation =(props)=>{
// const [items,setItems]=useState([{id:1,name:'LAPTOPS'},{id:2,name:'BAGS'},{id:3,name:'MOBILES'},{id:4,name:'TELEVISION'}]);
const handleClick=(e)=>{
console.log(e.target.innerHTML);
if(e.target.tagName==='LI'){
    props.history.push(`/itempage/${e.target.innerHTML}`)
//Vanilla Js 👇
// window.location.href='/'+ e.target.className;
}
}
const handleKey=(e)=>{
    if(e.target.dataset.uppercase !== undefined){
        e.target.value=e.target.value.toUpperCase();
}
}
    return(
        <div className='EventDel'>
            <ul className='category' onClick={handleClick}>
                <li className ='item_a'>Item A</li>
                <li className ='item_b'>Item B</li>
                <li className ='item_c'>Item C</li>
                <li className ='item_d'>Item D</li>
                <li className ='item_e'>Item E</li>
            </ul>
            <div className='Form' onChange={handleKey}>
                <input type="text" className='name' data-uppercase/>
                <input type="text" className='pan'/>
                <input type="text" className='address'/>
            </div>
            {/* <button onClick={()=>{props.history.push('/')}}>Go to home</button> */}
            <Link to='/'>Home</Link>
        </div>
    )
};

export default EventDelegation;