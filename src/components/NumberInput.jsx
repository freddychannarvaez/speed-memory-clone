export function NumberInput({number, onSubmit}) {
  const numberArray = Array(+number).fill()
  
  setTimeout(() => {
    const startElements = document.getElementsByTagName('input')
    startElements[0].focus()
  }, 100)

  const handleSubmit = (event) => {
    const result = []
    event.preventDefault()
    const formData = new FormData(event.target);
    if (formData.values().some((x) => x == '')) return

    for (const inputName of formData.values()) { 
      result.push(inputName)
    }
    onSubmit(result)
  }

  const onInput = (event, index) => {
    if (event.target.value.length > 1) return
    if (isNumber(event.target.value)) {
      const inputElements = document.getElementsByTagName('input')
      if (index + 1 < inputElements.length) {
        inputElements[index + 1].focus()
      }
    }
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}
      className="inputs">
      {numberArray.map((_, index) => (
        <input
          key={index}
          type="number"
          name={index}
          max={9}
          min={0}
          onChange={(event) => onInput(event, index)}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  )
}

const isNumber = (value) => {
  return (+value > -1 && +value < 10)
}