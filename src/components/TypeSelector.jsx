export function TypeSelector({typeSelected, hasStarted}) {
  return (
    <div className="selector">
      <label>Select a type</label>
      <select onChange={(e) => typeSelected(e.target.value)} disabled={hasStarted}>
        <option value="0">Decimal</option>
        <option value="1">Binary</option>
      </select>
    </div>
  )
}