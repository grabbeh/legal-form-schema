const FormButton = ({ disabled, text }) => (
  <div>
    <input
      className='fr b pv2 ph3 f5 dim pointer bg-green white'
      type='submit'
      disabled={disabled}
      value={text}
    />
  </div>
)

export default FormButton
