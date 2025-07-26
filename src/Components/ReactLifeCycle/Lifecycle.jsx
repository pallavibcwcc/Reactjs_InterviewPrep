import {useEffect,useState} from 'react'

const Lifecycle = () => {
const[clicked,setClicked]=useState();
const[count,setCount]=useState(0);

    useEffect(()=>{
alert("first render")
    },[count,clicked]);
    return(
        <div>
<button onClick={()=>setClicked("subscribe")}>subscribe</button>
{/* <br/> */}
<hr/>
<button onClick={()=>setClicked("to")}>to</button>
<hr/>
<button onClick={()=>setClicked("pallavichaneel")}>pallavichaneel</button>
<hr/>
<h1>{count}</h1>
<button onClick={()=>setCount(count+1)} >count</button>
<hr/>
<h1>{clicked}</h1>
        </div>
    )
}
export default Lifecycle;