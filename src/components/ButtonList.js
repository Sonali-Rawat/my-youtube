import React from 'react'
import Button from './Button'

// const list=["All","Gaming","Songs","Live","Soccer","Cricket","News","Motivation","Gadgets"]

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Songs"/>
      <Button name="Live"/>
      <Button name="Soccer"/>
      <Button name="Cricket"/>
      <Button name="News"/>
      <Button name="Motivation"/>
      <Button name="Gadgets"/>
      <Button name="Cooking"/>
    </div>
  )
}

export default ButtonList