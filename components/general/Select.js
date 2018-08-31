const Select = ({
  values,
  handleChange,
  name,
  placeholder,
  options,
  label
}) => {
  return (
    <div>
      <div className='b'>
        <label>
          {label}
        </label>
      </div>
      <select
        className='pa1 w-50 mt2 f4 font ba bw1 b--black-20'
        value={values[name]}
        name={name}
        key={values[name]}
        onChange={handleChange}
      >
        <option value={-1}>{placeholder}</option>
        {options.map(o => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>

    </div>
  )
}

export default Select
