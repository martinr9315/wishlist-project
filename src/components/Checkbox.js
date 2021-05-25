import React from 'react'

export const Checkbox = props => {
    return (
      <li>
       <input key={props.key} onClick={props.handleCheckElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value}
      </li>
    )
}

export default Checkbox