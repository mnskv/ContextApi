import React, { createContext, useState } from 'react'
import ChildComponent from './ChildComponent'
export const MyContext = createContext(null);

export default function ParentComponent() {
  let data="Hello from parent"
  const[value, setValue] = useState(data);
  const handleClick=()=>{
    setValue(data);
  }
    return (
    <div>

        <MyContext.Provider value={{value, setValue}} >
          

            <ChildComponent/>
            <button onClick={handleClick}>SetParentData</button>
        </MyContext.Provider>
    </div>
  )
}
