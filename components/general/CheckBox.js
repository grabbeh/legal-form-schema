import React from 'react'

class Checkbox extends React.Component {
  state = {
    required: this.props.checked
  }
  render () {
    let { values, handleChange, name, label } = this.props
    let { checked } = this.state
    return (
      <div>
        <label className='container'>
          <input
            className='checkbox'
            name={name}
            type='checkbox'
            checked={checked}
            onChange={handleChange}
          />
          <span className='checkmark' />
          <span className='b ml4'> {label}</span>
        </label>
      </div>
    )
  }
}

export default Checkbox
