import React from 'react'
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
    const data= "This is parent data coming froms props drilling";
  return (
    
    <div>
        <h1>parentcomponent</h1>
        <ChildComponent data={data} />

    
    </div>
  )
}
