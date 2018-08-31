import react from 'react'

class Input extends react.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
  }

  render () {
    const {
      label,
      type,
      placeholder,
      name,
      handleChange,
      value,
      error,
      onFocus,
      onBlur,
      readOnly,
      autoComplete
    } = this.props

    return (
      <div className='f4 b'>
        {label &&
          <div>
            <label className='mr3' htmlFor={value}>
              {label}
            </label>
          </div>}
        <input
          className='w-100 bb bw1 b--black-20 f4 font pa1 mt2 mw5'
          autoComplete={autoComplete}
          id={value}
          onChange={handleChange}
          placeholder={placeholder}
          value={value}
          type={type}
          name={name}
          onFocus={onFocus}
          onBlur={onBlur}
          readOnly={readOnly}
        />
        {this.props.onClick &&
          <div className='mt3 pt0-ns'>
            <button
              className='f6 bg-green white pv2 ph3'
              onClick={this.props.onClick}
            >
              <i className='fa fa-plus' />
            </button>
          </div>}
        <div className='red b f6'>{error}</div>
      </div>
    )
  }
}

export default Input
