import { Wrapper } from "./Button.styles";
import React from 'react'

const Button = ({text,callback}) => {
  return (
    <Wrapper type="button" onClick={callback}>
        {text}
    </Wrapper>
  )
}

export default Button