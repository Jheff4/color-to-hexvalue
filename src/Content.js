import React from 'react'
import FirstBox from './FirstBox'
import SecondBox from './SecondBox'

const Content = ({ color, changeColor, hexValue, setHexValue, isDarkText, setIsDarkText }) => {
  return (
    <div className='Container'>
      <FirstBox 
        color={color}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <SecondBox
        changeColor={changeColor}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  )
}

export default Content
