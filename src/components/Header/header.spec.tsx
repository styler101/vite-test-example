import React from 'react'
import { render } from '@testing-library/react'
import { Header } from './index'
import { HeaderProps } from './interfaces'

const pageTitles = ['Produto', 'Teste']

type SutType = {
  headerSut: HeaderProps
}
const makeSut = (): SutType => {
  const headerSut = {
    data: {
      title: 'Produto',
      description: 'any_description',
    },
  }
  return {
    headerSut,
  }
}
describe('Header Component', () => {
  test('Ensure that header component be render', () => {
    const sut = {
      title: '',
      description: '',
    }
    render(<Header data={sut} />)
  })

  test('Ensure that header component not be render with a empty title', () => {
    const sut = {
      title: 'any_title',
      description: '',
    }
    render(<Header data={sut} />)
    expect(sut.title).not.toBe('')
  })

  test('Ensure that header component not be render with a empty description', () => {
    const { headerSut } = makeSut()
    const { data } = headerSut
    render(<Header data={data} />)
    expect(data.description).not.toBe('')
  })

  test('Ensure that header component be render with one of those pages title', () => {
    const { headerSut } = makeSut()
    const { data } = headerSut
    render(<Header data={data} />)
    expect(pageTitles).toContain(data.title)
  })
})
