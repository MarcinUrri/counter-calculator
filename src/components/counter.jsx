import React from 'react'

const Counter = (props) => {
    const {counter} = props
    return (
      <React.Fragment>
        {props.children}
        <span>{counter.value}</span>
        <div>
          <button onClick={() => props.onIncrement(counter, 'increment')} className="btn btn-success btn-sm mr-2">Increment</button>
          <button onClick={() => props.onDecrement(counter, 'decrement')} className="btn btn-warning btn-sm mr-2">Decrease</button>
          <button onClick={() => props.onMultiply(counter, 'multiply')} className="btn btn-info btn-sm mr-2">Multiply</button>
          <button onClick={() => props.onDivide(counter, 'divide')} className="btn btn-secondary btn-sm mr-4">Divide</button>
          <button onClick={() => props.onDelete(counter.id)} className="btn btn-danger btn-sm mr-2">Delete</button>
        </div>
      </React.Fragment>
    )
}
export default Counter
