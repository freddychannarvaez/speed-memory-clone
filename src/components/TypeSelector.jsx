export function TypeSelector({typeSelected}) {
  return (
    <div>
      <label>Select a type</label>
      <select onChange={(e) => typeSelected(e.target.value)}>
        <option value="0">Decimal</option>
        <option value="1">Binary</option>
      </select>
    </div>
  )
}