import React, { useState,useCallback,useEffect,useRef } from 'react'
import './passwordgenerator.css'
import { toast, ToastContainer } from 'react-toastify';
function Passwordgenerator() {
  //lengthstate
  const[length,setLength]=useState(8);
  const[numberallowed,setNumallowed]=useState(false);
  const[bcharallowed,setBcharallowed]=useState(false);
  const[spcharallowed,setSpcharallowed]=useState(false);
  const[gpassword,setGpass]=useState("");
   //useref copy pass

   const passref=useRef(null);
  const passgenerator=useCallback(()=>{
    let pass="";
    let str="abcdefghijklmnopqrstuvwxyz";

    if(numberallowed) str+="0123456789";
    if(bcharallowed) str+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(spcharallowed)str+="@$%!&*#_-[]{}";

    for(let i=1;i<length;i++){
      let char=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }
    setGpass(pass);

  },[length,numberallowed,bcharallowed,spcharallowed,setGpass])

  const copypasstoclip=useCallback(()=>{
     passref.current?.select();
     window.navigator.clipboard.writeText(gpassword);
     alert('Generated password copied to clipboard.');
    
  },[gpassword])

  useEffect(()=>{
  passgenerator();
  },[length,numberallowed,bcharallowed,spcharallowed,setGpass])
  return (
    <div className="passcontainer">
<div className="passbox">
<div className="inputbox">
            Generated Password
            <input type="text" className='inputpass'  value={gpassword} readOnly ref={passref}/>
            <div className='copypass'  onClick={copypasstoclip}>COPY</div>
            </div>

            <div className="generator">
              <div className="lengthdiv">
              <input type="range" name='lrange' id='lrange'value={length} min={6} max={30} onChange={(e)=>{setLength(e.target.value)}} />
              <label htmlFor="lrange">Length: {length}</label> 
              </div>
           <div className="caplhadiv">
           <input type="checkbox" name='baplha' id='baplha'
           defaultChecked={bcharallowed}
           onChange={()=>setBcharallowed((prev)=>!prev)} />
            <label htmlFor="baplha">Captital Alphabets</label>
           </div>
           <div className="numberdiv">
           <input type="checkbox" name='numbers' id='numbers'
           defaultChecked={numberallowed}
           onChange={()=>setNumallowed((prev)=>!prev)}
           />
            
            <label htmlFor="numbers">Numbers</label>
           </div>

            <div className="schardiv">
            <input type="checkbox" name='schar' id='schar'
            defaultChecked={spcharallowed}
            onChange={()=>setSpcharallowed((prev)=>!prev)}
            />
            
            <label htmlFor="schar">Special Characters</label>
            </div>
            
            </div>
</div>
        
       
    </div>
    
  )
}

export default Passwordgenerator