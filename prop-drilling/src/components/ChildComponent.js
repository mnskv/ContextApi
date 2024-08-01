import React from 'react'
import GrandChildComponent from './GrandChildComponent'

export default function ChildComponent(props) {
  return (
    <div>
        
        <h4>ChildComponent</h4>
        <GrandChildComponent data={props.data} />
    </div>
  )
}
