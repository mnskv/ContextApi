// GrandChildComponent.js
import React, { useContext } from 'react';
import { MyContext } from './ParentComponent';

export default function GrandChildComponent() {
  const ref=useContext(MyContext)
  const handleSet=()=>{
    ref.setValue("Data from GrandChildComponent");
  }

  return (
    <div>
      <label>Text</label>
      <input type="text" value={ref.value} ></input>
      <br/>
      <button className='btn btn-primary' onClick={handleSet}>set</button>
    </div>
  );
}
