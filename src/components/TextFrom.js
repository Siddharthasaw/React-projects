import React, { useState } from 'react'

export default function TextFrom(props) {
  const handaleUpClick = ()=>
  {
    console.log('hii function have worked')
    let newTaxt = text.toUpperCase();
    setText(newTaxt)
  }
  const handaleLoClick = ()=>
  {
    let newTaxt = text.toLocaleLowerCase();
    setText(newTaxt)
  }
  const handaleClearClick = ()=>
  {
    let newTaxt = "";
    setText(newTaxt)
  }
  

  const hamdaleOnChange = (event)=>{
    console.log('err remove')
    setText(event.target.value)
  }
  const [text , setText] = useState('')
  return (
   <>
    <div className='container'>
          <h2>{text.split(" ").length} <b>words and </b> {text.length} <b>characters:</b> </h2>
          <p>{0.008* text.split(" ").length} - <b>Minuts Reading Time</b>  </p>
       <div className="mb-3">
         <textarea className="from-control" id="myBox" value={text} onChange={hamdaleOnChange} cols="100" rows="9"></textarea>
       </div>
      <button className='btn btn-primary mx-2' onClick={handaleUpClick}>conver two upperCase</button>
      <button className='btn btn-primary mx-2' onClick={handaleLoClick}>conver two Lowercase</button>
      <button className='btn btn-primary mx-2' onClick={handaleClearClick}>Clear Text</button>
      
    </div>
    <div className='container my-3'>
      <h2>Privew</h2>
      <p>{text}</p>
   </div>
    </>
  

   
  )
}
