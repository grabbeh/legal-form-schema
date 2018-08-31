import React, { Fragment } from 'react'
import FormTitle from '../components/styles/FormTitle'
import RepeatForm from '../components/Form'
import Box from '../components/styles/CenterBox'
import { Formik, Form } from 'formik'
import FormButton from '../components/styles/FormButton'
import Button from '../components/styles/Button'
import ClearFix from '../components/styles/ClearFix'
import Header from '../components/Header'

export default class extends React.Component {
  static async getInitialProps () {
    const formData = await import('../data/non-disclosure.json')
    return { formData }
  }

  state = {
    currentStep: 0,
    formValues: {}
  }

  hoistFormStatus = values => {
    this.setState({
      currentStep: this.state.currentStep + 1,
      formValues: { ...this.state.formValues, ...values }
    })
  }

  previousStep = () => {
    this.setState({ currentStep: this.state.currentStep - 1 })
  }

  render () {
    let { formData: { formName, formSteps } } = this.props
    let { currentStep } = this.state
    let { hoistFormStatus, previousStep } = this
    return (
      <div className='pa3'>
        <Header />
        <Box>
          <FormTitle title={formName} />
          <ClearFix />
        </Box>
        <div>
          {formSteps.map((f, i) => (
            <RepeatForm
              currentStep={currentStep}
              hoistFormStatus={hoistFormStatus}
              previousStep={previousStep}
              {...f}
              key={i}
              formLength={formSteps.length}
            />
          ))}
        </div>
        <Box>
          <Formik
            onSubmit={(values, { setSubmitting, setErrors }) => {}}
            render={({ handleSubmit, isSubmitting }) => {
              return (
                <Fragment>
                  {currentStep == formSteps.length &&
                    <Fragment>
                      <Button text='PREVIOUS' onClick={previousStep} />
                      <Form>
                        <FormButton
                          text='CREATE DOCUMENT'
                          disabled={isSubmitting}
                        />
                      </Form>{' '}
                    </Fragment>}
                </Fragment>
              )
            }}
          />
          <ClearFix />
          <pre
            style={{
              background: '#f6f8fa',
              fontSize: '1.2rem',
              padding: '.5rem'
            }}
          >
            <strong>state</strong> ={' '}
            {JSON.stringify(this.state, null, 2)}
          </pre>
        </Box>
      </div>
    )
  }
}
