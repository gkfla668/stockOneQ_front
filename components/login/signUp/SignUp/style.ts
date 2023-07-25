import styled from 'styled-components';

const SignUpBox = styled.div`
  width: 93.2rem;
  padding: 6.5rem 2rem;
  margin: 0 auto;
`
const SignUpHeaderBox = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 5.9rem;
  border-bottom: 1px solid #E1E1E1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4.3rem;

  img {
    margin-bottom: 2.6rem;
  }

  p {
    color: var(--color-black);
    text-align: center;
    font-size: 2.2rem;
    font-weight: 600;
    line-height: normal;
  }
`

const SignUpForm = styled.form`
  padding: 0 12.7rem;
`

const InputRowBox = styled.div`
  display: flex;
  margin-bottom: 4.5rem;
`

const InputRow1Box = styled(InputRowBox)`
  gap: 7.1rem;
`

const InputRow2Box = styled(InputRowBox)`
  flex-direction: column;
  gap: 2rem;
`

const InputRow3Box = styled(InputRow2Box)`
  padding-bottom: 2.1rem;
`

const SignUpInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const SignUpLabel = styled.label`
  color: var(--color-black);
  font-size: 1.8rem;
  font-weight: 600;
  line-height: normal;
`

interface ISignUpInput {
  width: string;
  placeholderLocation?: string;
}

const SignUpInput = styled.input<ISignUpInput>`
  width: ${({ width }) => width};
  height: 4.5rem;
  border: 1px solid #E1E1E1;
  border-radius: 5px;
  color: var(--color-black);
  font-size: 1.5rem;
  font-weight: 400;
  line-height: normal;
  padding: 1.3rem 2.2rem;

  &::placeholder {
    color: #E1E1E1;
    text-align: ${({ placeholderLocation = 'center' }) => placeholderLocation};
    font-size: 1.5rem;
    font-weight: 500;
    line-height: normal;
  }

  &:focus {
    border: 1px solid linear-gradient(#F9E499, #F2B2CF, #55ABD7, #B1B0D7);
  }
`

const BirthInputBox = styled.div`
  display: flex;
  gap: 2rem;
`

const EmailInputBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  
  p {
    padding: 0 2.8rem;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: normal;
  }
`

const EmailSelectBox = styled.div`
  width: 18.3rem;
  margin-left: 1.9rem;
  height: 4.5rem;
  padding: 1.3rem 2rem;

  border: 1px solid #E1E1E1;
  border-radius: 5px;
  color: var(--color-black);
  font-size: 1.5rem;
  font-weight: 400;
  line-height: normal;

  &:focus {
    border: 1px solid linear-gradient(#F9E499, #F2B2CF, #55ABD7, #B1B0D7);
  }
`

const DigitInputBox = styled.div`
  display: flex;
  gap: .7rem;
  align-items: center;

  p {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: normal;
  }
`

const IDInputBox = styled.div`
  display: flex;
  align-items: end;
  gap: 4.1rem;

  p {
    color: #979797;
    font-size: 1.3rem;
    font-weight: 500;
    line-height: normal;
  }
`

const PwInputBox = styled(IDInputBox)`
  gap: 2.4rem;
`

const AuthBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

const AuthImgBox = styled.div`
  width: 16.3rem;
  height: 11.1rem;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: .9rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  p {
    color: var(--color-black);
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: normal;
  }
`

const AddrInputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  button {
    width: 7.2rem;
    height: 4.5rem;
    background-color: var(--color-black);
    border-radius: .5rem;
    color: var(--color-white);
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: normal;
  }
`

const SignUpBtnBox = styled.div`
  margin: 9.2rem auto 6.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

export {
  SignUpBox,
  SignUpHeaderBox,
  SignUpForm,
  InputRow1Box,
  InputRow2Box,
  InputRow3Box,
  SignUpInputBox,
  SignUpLabel,
  SignUpInput,
  BirthInputBox,
  EmailInputBox,
  EmailSelectBox,
  DigitInputBox,
  IDInputBox,
  PwInputBox,
  AuthBox,
  AuthImgBox,
  AddrInputBox,
  SignUpBtnBox
}