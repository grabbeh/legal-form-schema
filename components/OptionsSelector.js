import React from 'react'
import Input from './general/Input'
import Button from './styles/Button'
import FormButton from './styles/FormButton'
import { Formik, Form } from 'formik'
import ClearFix from './styles/ClearFix'
import List from './styles/List'

class OptionsSelector extends React.Component {
  state = {
    currentOption: '',
    options: []
  }

  onChange = event => {
    this.setState({
      currentOption: event.target.value
    })
  }

  addOption = () => {
    let { options, currentOption } = this.state

    let copy = [...options, currentOption]
    this.setState({ options: copy, currentOption: '' })
  }

  render () {
    let { options, currentOption } = this.state
    let { hoistFormStatus, index } = this.props
    let { addOption, onChange } = this
    return (
      <div>
        <div className='b'>Add options</div>
        <Formik
          validate={values => {
            let errors = {}
            if (options.length === 0) errors.options = 'Required'
            if (options.length === 1) { errors.options = 'More than 1 option required for this input type' }
            return errors
          }}
          onSubmit={values => {
            hoistFormStatus({ ...values, options }, index)
          }}
          render={({ values, errors, touched, handleSubmit, isSubmitting }) => {
            return (
              <Form>
                <Input
                  handleChange={onChange}
                  value={currentOption}
                  name='currentOption'
                />
                {errors.options &&
                  <div className='mt1 b red f5'>
                    {errors.options}
                  </div>}
                <div className='mt3'>
                  <Button onClick={addOption} text='ADD' />
                  <FormButton text='NEXT' />
                </div>
              </Form>
            )
          }}
        />
        <ClearFix />
        {options.length > 0 && <div className='mt3 b'>Options</div>}
        <List>
          {options.map((o, i) => <li className='pv1' key={i}>{`- ${o}`}</li>)}
        </List>

      </div>
    )
  }
}

export default OptionsSelector
