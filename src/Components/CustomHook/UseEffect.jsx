import useFetch from './useFetch'
const  UseEffect= () => {

const[data] = useFetch();
   
    return(
        <div>
            <h1>Title</h1>
            <ul>
                {
                  data.map((val)=>{
                    return<li>{val.title}</li>
                  })  
                }
            </ul>

        </div>
    )
}
export default UseEffect;