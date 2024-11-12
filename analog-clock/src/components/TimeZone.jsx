import React from 'react'

const TimeZone = ({handleZone}) => {
  return (
    <div>
        <h2>Time Zone</h2>
        <button onClick={handleZone}>Click</button>
    </div>
  )
}

export default TimeZone