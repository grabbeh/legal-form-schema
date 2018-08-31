const Button = ({ text, onClick }) => (
  <button
    type='button'
    onClick={onClick}
    className='fl pv2 ph3 font f5 b button pointer bg-green dim white'
  >
    {text}
  </button>
)

export default Button
