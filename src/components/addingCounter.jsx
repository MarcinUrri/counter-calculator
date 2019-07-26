import React from 'react'

const AddingCounter = (props) => {
  const {newCounterValue, addCounter, handleChange, cancelAddingCounter} = props
  return (
    <fieldset>
      <label className="badge badge-info mr-2" htmlFor="counterInit">Initial value:</label>
      <input className="form-control-sm" value={newCounterValue} onChange={handleChange} type="number" name="counterInit"/>
      <button onClick={addCounter} className="btn btn-primary">Add</button>
      <button onClick={cancelAddingCounter} className="btn btn-danger ml-1">Cancel</button>
  </fieldset>
  )
}
export default AddingCounter