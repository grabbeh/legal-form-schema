const Summary = ({ index, step }) => {
  return (
    <div>
      <div className='b'>{`Step ${index + 1} - Summary`}</div>
      <pre
        style={{
          background: '#f6f8fa',
          fontSize: '1.2rem',
          padding: '.5rem'
        }}
      >
        <strong>state</strong> ={' '}
        {JSON.stringify(step, null, 2)}
      </pre>
    </div>
  )
}

export default Summary
