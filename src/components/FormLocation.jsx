import getRandomNumber from "../utils/getRandomNumber"

const FormLocation = ({setIdLocation}) => {
  const handleSubmit = e => {
    e.preventDefault()
    const inputValue = e.target.inputId.value.trim()
    if (inputValue === '' || inputValue === '0'){
      setIdLocation(getRandomNumber(126))
    } else {
      setIdLocation(inputValue)
    }
    e.target.inputId.value = ''
  }
  return (
    <form className="form__input-button" onSubmit={handleSubmit}>
      <input className="input__button" id="inputId" type="text" />
      <button className="button__search">Search</button>
    </form>
  )
}

export default FormLocation


