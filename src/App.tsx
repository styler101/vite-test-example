import React from 'react'
import { Header } from './components/Header'

function App(): JSX.Element {
  return (
    <Header
      data={{
        title: 'Produto',
        description: 'any_description',
      }}
    />
  )
}

export default App
