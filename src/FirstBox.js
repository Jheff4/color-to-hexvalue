
const FirstBox = ({ color, hexValue, isDarkText }) => {
  return (
    <div 
      className='Firstbox'
      style={{ 
        backgroundColor: color,
        color: isDarkText ? 'black' : 'gray'
      }}
    >
      <p>{ color ? color : "Empty Value" }</p>
      <p>{ hexValue ? `Hex - ${hexValue}` : null }</p>
    </div>
  )
}

export default FirstBox
