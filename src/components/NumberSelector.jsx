const numbers = [
  { name: 6, value: 6 },
  { name: 7, value: 7 },
  { name: 8, value: 8 },
  { name: 9, value: 9 },
  { name: 10, value: 10 },
  { name: 11, value: 11 },
  { name: 12, value: 12 },
  { name: 13, value: 13 },
  { name: 14, value: 14 },
  { name: 15, value: 15 },
  { name: 16, value: 16 },
  { name: 17, value: 17 },
  { name: 18, value: 18 },
  { name: 19, value: 19 },
  { name: 20, value: 20 }
]

export function NumberSelector({numberSelected}) {


  return (
    <div className="selector">
      <label>Select a number</label>
      <select onChange={(e) => numberSelected(e.target.value)}>
        {numbers.map((number, index) => (
          <option key={index} value={number.value}>{number.name}</option>
        ))}
      </select>
    </div>
    )
}