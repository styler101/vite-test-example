import React from 'react'
import { HeaderProps } from './interfaces'

export function Header(props: HeaderProps): JSX.Element {
  const { title, description } = props.data
  return (
    <header id="header">
      <h1> {title}</h1>
      <p> {description}</p>
    </header>
  )
}
