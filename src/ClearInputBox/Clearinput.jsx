import {useRef} from 'react'

const Clearinput = () => {
    const iputname = useRef(null);

    const inputHnadler = () => {
iputname.current.value="";
    }
    return(
        <div>
            <input type="text" placeholder="Write List" ref={iputname}/>
            <button onClick={inputHnadler}>ClearText</button>

        </div>
    )
}
export default Clearinput;