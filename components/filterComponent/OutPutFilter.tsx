import { DivFilterContainer } from '@/app/styled'
import React from 'react'
import { Title } from '../styledComponents/Title.styled'

export default function OutPutFilter({ filterValue }: { filterValue: string }) {
  return (
    <DivFilterContainer>
      <Title
        fontFamily="'Hedvig Letters Serif', serif;"
        fontSize="150%"
        color="#fff"
      >
        Filtros
      </Title>
      <p dangerouslySetInnerHTML={{ __html: filterValue }} />
    </DivFilterContainer>
  )
}
