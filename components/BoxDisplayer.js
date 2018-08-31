import React, { Children, cloneElement } from 'react'

class BoxDisplayer extends React.Component {
  childMap = (children, stepNumber) => {
    return Children.map(children, (child, i) => {
      let className = ''
      if (stepNumber !== i) className = 'dn'
      return cloneElement(child, {
        className
      })
    })
  }

  render () {
    let { stepNumber, children } = this.props
    let { childMap } = this
    let elements = childMap(children, stepNumber)
    return elements
  }
}

export default BoxDisplayer
