export function TypeSelector({typeSelected}) {
  return (
    <div className="selector">
      <label>Select a type</label>
      <select onChange={(e) => typeSelected(e.target.value)}>
        <option value="0">Decimal</option>
        <option value="1">Binary</option>
      </select>
    </div>
  )
}