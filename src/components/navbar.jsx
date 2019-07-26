import React from 'react'

const NavBar = (props) => {
  const {counters, addCounter} = props
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand" href="#">
        <h2 className="badge badge-info">Active counters: {counters}</h2>
        <button 
          onClick={addCounter}
          className="btn btn-primary btn-sm m-2">Add counter</button>
      </div>
    </nav>
  )
}
export default NavBar