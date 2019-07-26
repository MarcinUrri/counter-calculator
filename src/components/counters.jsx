import React from 'react'
import Counter from './counter'
const Counters = (props) => {
    const { onReset, onDelete, onIncrement, onDecrement, onDivide, onMultiply, counters } = props
    let counterValue = counters
      .map(counter => counter.value)
       counterValue =  counterValue.length > 0 ? counterValue.reduce((prev, curr) => prev + curr) : counterValue = []
    return (
      <div>
        <button 
          onClick={onReset}
          className="btn btn-primary btn-sm my-4 mr-2">Reset</button>
        <span>Sum: {counterValue}</span>
        {counters.map(counter => 
          <Counter 
            onDelete={onDelete} 
            onIncrement={onIncrement}
            onMultiply={onMultiply}
            onDecrement={onDecrement}
            onDivide={onDivide}
            key={counter.id} 
            counter={counter}
            >
            <h4>Counter #{counter.id+1}</h4>
          </Counter>
          )}
      </div>
    )
}
export default Counters
