import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import ClearFix from '../components/styles/ClearFix'
import Box from '../components/styles/CenterBox'
import Select from '../components/general/Select'
import FormButton from '../components/styles/FormButton'
import Button from '../components/styles/Button'
import Input from '../components/general/Input'
import FormSection from '../components/styles/FormSection'
import { camelize } from '../lib/helper'
import FormTitle from '../components/styles/FormTitle'
import OptionsSelector from '../components/OptionsSelector'
import BoxDisplayer from '../components/BoxDisplayer'
import { MdClear } from 'react-icons/md'
import Checkbox from '../components/general/CheckBox'
import Summary from '../components/Summary'
import Header from '../components/Header'
import FloatRight from '../components/styles/FloatRight'

class FormBuilder extends Component {
  static async getInitialProps () {
    return {}
  }

  state = {
    errors: {
      formName: ''
    },
    formName: '',
    formSteps: []
  }

  validate = () => {
    if (!this.state.formName) this.state.errors.formName = 'Required'
  }

  validate = () => {
    let isError = false
    const errors = {
      formName: ''
    }
    if (!this.state.formName) {
      isError = true
      errors.formName = 'Form name required'
    }
    this.setState({
      errors
    })
    return isError
  }

  saveForm = () => {
    let err = this.validate()
    if (!err) {
      let success = true
    }
  }

  addFormName = formName => {
    this.setState({ formName })
  }

  hoistFormStatus = (values, index) => {
    let copy = [...this.state.formSteps]
    let relevantStep = copy[index]
    if (values.label) values.name = camelize(values.label)
    copy.splice(index, 1, {
      stepNumber: relevantStep.stepNumber + 1,
      step: { ...relevantStep.step, ...values }
    })
    this.setState({ formSteps: copy })
  }

  addStep = () => {
    this.setState({
      formSteps: [
        ...this.state.formSteps,
        {
          stepNumber: 0,
          formName: '',
          step: { inputType: '', label: '', required: false }
        }
      ]
    })
  }

  removeStep = index => {
    let copy = [...this.state.formSteps]
    copy.splice(index, 1)
    this.setState({ formSteps: copy })
  }

  goBack = index => {
    let copy = [...this.state.formSteps]
    let relevantStep = copy[index]
    relevantStep.stepNumber = relevantStep.stepNumber - 1
    this.setState({ formSteps: copy })
  }

  render () {
    let inputTypeOptions = ['textInput', 'select', 'checkbox']
    let { formSteps, errors } = this.state
    console.log(errors)
    let {
      hoistFormStatus,
      saveForm,
      addFormName,
      addStep,
      goBack,
      removeStep
    } = this
    return (
      <div>
        <Header />
        <Box>
          <FormTitle title='Form builder' />
          <ClearFix />
        </Box>
        <Box>
          <Formik
            render={({ values }) => {
              return (
                <Form>

                  <Input
                    name='formName'
                    handleChange={addFormName}
                    values={values}
                    label={'Form name'}
                  />
                  {errors.formName &&
                    <div className='mt1 b red f5'>
                      {errors.formName}
                    </div>}

                </Form>
              )
            }}
          />
        </Box>
        {formSteps.map(({ step, stepNumber }, index) => {
          return (
            <Formik
              key={index}
              initialValues={{ ...step }}
              validate={values => {
                let errors = {}
                if (!values.label) errors.label = 'Required'
                if (!values.inputType) errors.inputType = 'Required'
                return errors
              }}
              onSubmit={values => {
                hoistFormStatus({ ...values }, index)
              }}
              render={({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit
              }) => {
                return (
                  <div>
                    <BoxDisplayer stepNumber={stepNumber}>
                      <Box>
                        <div className='fl b'>{`Step ${index + 1}`}</div>
                        <MdClear
                          size={'1.3em'}
                          className='fr b'
                          onClick={removeStep}
                        />
                        <ClearFix />
                        <Form>
                          <FormSection>
                            <Input
                              name='label'
                              handleChange={handleChange}
                              values={values}
                              label={'Attribute'}
                            />
                            {touched.label &&
                              errors.label &&
                              <div className='mt1 b red f5'>
                                {errors.label}
                              </div>}
                          </FormSection>
                          <FormSection>
                            <Select
                              options={inputTypeOptions}
                              label={'Input type'}
                              name='inputType'
                              values={values}
                              placeholder='Select input'
                              handleChange={handleChange}
                            />
                            {touched.inputType &&
                              errors.inputType &&
                              <div className='mt1 b red f5'>
                                {errors.inputType}
                              </div>}
                          </FormSection>

                          <FormSection>
                            <Checkbox
                              label={'Required'}
                              values={values}
                              name={'required'}
                              handleChange={handleChange}
                            />
                          </FormSection>
                          <FloatRight>
                            {stepNumber === 0 && <FormButton text='NEXT' />}
                          </FloatRight>
                        </Form>
                        <ClearFix />
                      </Box>
                      <Box>
                        {step.inputType === 'select'
                          ? <OptionsSelector
                            hoistFormStatus={hoistFormStatus}
                            index={index}
                            />
                          : <Summary index={index} step={step} />}
                      </Box>
                      <Box><Summary index={index} step={step} /></Box>
                    </BoxDisplayer>
                    {stepNumber > 0 &&
                      <Box>
                        <Button
                          onClick={() => {
                            goBack(index)
                          }}
                          text='BACK'
                        />
                        <ClearFix />
                      </Box>}
                  </div>
                )
              }}
            />
          )
        })}
        <Box>
          <Button text='ADD STEP' onClick={addStep} />
          <FloatRight>
            <Button onClick={saveForm} text='SAVE FORM' />
          </FloatRight>
          <ClearFix />
        </Box>
      </div>
    )
  }
}

export default FormBuilder
