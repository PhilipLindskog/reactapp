import React from 'react'

const DarkmodeToggle = () => {
  return (
    <div id="darkmode-toggle-switch" className="btn-toggle-switch">
        <span className="label">Dark mode</span>
        <label for="darkmode-switch" className="toggle-switch">
            <input id="darkmode-switch" type="checkbox"/>
            <span className="slider round"></span>
        </label>
    </div>
  )
}

export default DarkmodeToggle