export function NumberInput({number}) {
  const inputs = Array(+number).fill(0)
  return (
    <div className="inputs">
      {inputs.map((input, index) => (
        <input key={index} type="number"/>
        // <input key={index} type="number" value={input} />
      ))}
    </div>
    )
}