import React from 'react'

function GrandChildComponent(props) {
  return (
    <div>
        <h1>GrandChild Component</h1>
        <h2>{props.data}</h2>
    </div>
  )
}

export default GrandChildComponent