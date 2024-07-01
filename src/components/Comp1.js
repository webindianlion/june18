import React, { useEffect, useState } from 'react';
import './Comp1.css';
// import { useState } from 'react';

function Comp1(props) {

    const [ttl, setTtl] =  useState({color:"red", size:32});
    
    const [countnum, setCountnum] = useState(0);
    useEffect(()=>{
      setCountnum((countnum) =>  countnum + 1 );
    } ,[ttl]);


    const changeColor = ()=>{ ttl.color==="red" ? setTtl({color:"blue", size:30}) : setTtl({color:"red", size:32}) }

  return (
    <div>
      <hr />
      <h2>This is Component 1</h2>
        <h6>Here we are using -- State & change State -- useEffect</h6>        
        <p>There is one counter(state) which will increment at once with the help of useEffect(HOOK), and its dependancy is ttl</p>
        <p>There is a text with css (color - red) and (font-size - 50). This css will toggle with the help of changeColor call-to-action. </p>
        <h2>{countnum}</h2>
        <h2 className='comp1-ttl' style={{color:ttl.color, fontSize:ttl.size}}>{props.name}</h2>
        <button className='btn btn-primary' onClick={changeColor}>Change State</button>
        <hr />
    </div>
  )
}

export default Comp1