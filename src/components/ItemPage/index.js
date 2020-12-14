import {Link, useParams } from 'react-router-dom';
import './index.css'
const ItemPage =()=>{
    const params=useParams();
    // console.log(params)
    return(
        <div className='ItemPage'>
            Item Page:  {params.name}
            <Link to='/event_delegation'>Go back</Link>
        </div>
    )
}
export default ItemPage;