import {useState,useCallback} from 'react'

const UseCallback = () => {
    const[count,setCount]=useState(0);
    const[inputval,setInputval]=useState("");

  const result = useCallback(
     function slowfunction(){
     let sum=0;
    for(let i=0;i<=3;i++){
        sum=sum+i;
    }
    console.log("slowfunction");
    return sum;
   },[count]);



    return(
        <div>
<h1>{count}</h1>
<button onClick={()=>setCount(count+1)}>Increment</button>
<hr/>
<input type='text' value={inputval} placeholder="write" onChange={(e)=>setInputval(e.target.value)}/>
<h1>input:{inputval}</h1>
<hr/>
{/* return function */}
<h1> {console.log(result())}</h1>
<h1> {result()}</h1>
        </div>
    )
}
export default UseCallback ;