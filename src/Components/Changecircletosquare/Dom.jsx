
import '../../Styles/Dom.css'

import {useState } from 'react'

const Dom =() => {
  const[iscircle,setIscircle]=useState(true);
  return(
    <div className="Shape">
      <div className={iscircle?"circle":"square"}></div>
       

          <button onClick={()=>setIscircle(!iscircle)}>changeShape</button>
    

    </div>
  )
}
export default Dom;