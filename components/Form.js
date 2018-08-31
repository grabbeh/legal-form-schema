import React from 'react'
import { Formik, Form } from 'formik'
import Select from './general/Select'
import Checkbox from './general/CheckBox'
import Input from './general/Input'
import Box from './styles/CenterBox'
import FormButton from './styles/FormButton'
import Button from './styles/Button'
import DisplayFormikState from './DisplayFormikState'
import ClearFix from './styles/ClearFix'
import cn from 'classnames'

class Basic extends React.Component {
  displayInput = (
    inputType,
    name,
    values,
    placeholder,
    handleChange,
    handleBlur,
    options,
    label
  ) => {
    switch (inputType) {
      case 'textInput':
        return (
          <Input
            name={name}
            onBlur={handleBlur}
            handleChange={handleChange}
            values={values}
            label={label}
          />
        )
      case 'select':
        return (
          <Select
            label={label}
            name={name}
            values={values}
            placeholder={placeholder}
            options={options}
            handleChange={handleChange}
          />
        )
      case 'checkbox':
        return (
          <Checkbox
            label={label}
            values={values}
            name={name}
            handleChange={handleChange}
          />
        )
      default:
        return 'foo'
    }
  }
  render () {
    let {
      label,
      name,
      placeholder,
      options,
      error,
      inputType,
      required,
      initialValue,
      hoistFormStatus,
      formStep,
      currentStep,
      previousStep,
      formLength
    } = this.props

    let initialValues = {}
    initialValues[name] = initialValue || ''
    return (
      <Formik
        initialValues={initialValues}
        validate={values => {
          let errors = {}
          if (!values[name] && required) {
            errors[name] = error || 'Required'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          hoistFormStatus({ ...values })
        }}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => {
          return (
            <Box className={cn(formStep !== currentStep && 'dn')}>
              <div className='b mb1'>
                {`Step ${formStep + 1} out of ${formLength}`}
              </div>
              <Form>
                {this.displayInput(
                  inputType,
                  name,
                  values,
                  placeholder,
                  handleChange,
                  handleBlur,
                  options,
                  label
                )}
                {touched[name] &&
                  errors[name] &&
                  <div className='b red f5'>{errors[name]}</div>}
                <div className='mt3'>
                  {currentStep > 0 &&
                    <Button text='PREVIOUS' onClick={previousStep} />}
                  <FormButton text='NEXT' />
                </div>
                <ClearFix />
              </Form>
            </Box>
          )
        }}
      />
    )
  }
}

export default Basic
