import { Link } from "react-router-dom";
import "./index.css";


const Bubbling_Capturing =()=>{
    const handleClickGParent = (event) => {
        console.log("Grandparent👵 clicked !!");
        // event.stopPropagation();
      };
      const handleClickParent = (event) => {
        console.log("Parent👩 clicked !!");
        event.stopPropagation();
      };
      const handleClickChild = (event) => {
        console.log("Child👶 clicked !!");
        // event.stopPropagation();
      };
    return (
      <div className='bubbling'>
        <h1>This is bubbling & Capturing page!</h1>
        <div
        className="grandparent"
        style={{ backgroundColor: " #4e7af1" }}
        //capturing cycle
        onClickCapture={handleClickGParent}
        //bubbling cycle
        // onClick={handleClickGParent}
      >
        <p>Grandparent👵</p>

        <div
          className="parent"
          style={{ backgroundColor: "#2db98f" }}
          //capturing cycle
          // onClickCapture={handleClickParent}
          //bubbling cycle
          onClick={handleClickParent}
        >
          <p>Parent👩</p>

          <div
            className="child"
            style={{ backgroundColor: "#ff9750" }}
            //capturing cycle
            onClickCapture={handleClickChild}
            //bubbling cycle
            // onClick={handleClickChild}
          >
            <p>Child👶</p>
          </div>
        </div>
      </div>
      <p>Default is bubbling phase <br/> onClickCapture enables capturing <br/> e.stopPropagation() stops propagation</p>
      <p>Tweak the code and play around to understand</p>
      <Link to='/'>Home</Link>
      </div>
    )
  };

  export default Bubbling_Capturing;