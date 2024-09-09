
const times = [
  { name: 0.1, value: 100 },
  { name: 0.2, value: 200 },
  { name: 0.3, value: 300 },
  { name: 0.4, value: 400 },
  { name: 0.5, value: 500 },
  { name: 0.6, value: 600 },
  { name: 0.7, value: 700 },
  { name: 0.8, value: 800 },
  { name: 0.9, value: 900 },
  { name: 1, value: 1000 },
  { name: 1.1, value: 1100 },
  { name: 1.2, value: 1200 },
  { name: 1.3, value: 1300 },
  { name: 1.4, value: 1400 },
  { name: 1.5, value: 1500 },
  { name: 1.6, value: 1600 },
  { name: 1.7, value: 1700 },
  { name: 1.8, value: 1800 },
  { name: 1.9, value: 1900 },
  { name: 2, value: 2000 },
]

export function TimeSelector({timeSelected}) {
  return (
    <div>
      <label>Select a time</label>
      <select onChange={(e) => timeSelected(e.target.value)}> 
        {times.map((time, index) => (
          <option key={index} value={time.value}>{time.name}</option>
        ))}
      </select>
    </div>
  )
}