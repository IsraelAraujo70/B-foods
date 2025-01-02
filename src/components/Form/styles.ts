import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1em;
`
export const FormTitle = styled.div`
  h1 {
    font-size: 1.5em;
    font-weight: 700;
  }
`
export const FormS = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 0.5em;
  label {
    font-size: 1em;
    font-weight: 700;
  }
  input {
    padding: 0.5em;
  }
`
export const FormConfirmation = styled.div`
  :last-child {
    margin-bottom: 1em;
  }
`

export const FormItemException = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em;
  input {
    max-width: 87%;
  }
`
export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5em;
`
export const ErrorMessage = styled.span`
  color: #fff;
  font-size: 14px;
  margin-top: 4px;
`
