import colorNames from 'colornames'

const SecondBox = ({ changeColor, setHexValue, isDarkText, setIsDarkText }) => {

  return (
    <form className='Form' onSubmit={ (e) => e.preventDefault() }>
      <label>Add Color Name:</label>
      <input
        autoFocus
        type="text"
        placeholder='Add color name'
        onChange={ (e) => {
          changeColor(e.target.value)
          setHexValue( colorNames(e.target.value) )
        }}
      />
      <button
        type='button'
        onClick={ () => setIsDarkText(!isDarkText)}
      >
        {isDarkText ? 'light' : 'dark'}
      </button>
    </form>
  )
}

export default SecondBox
