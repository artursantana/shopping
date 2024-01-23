
import * as S from './style'
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

const UiContainer = ({children}: Props) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  )
}

export default UiContainer
