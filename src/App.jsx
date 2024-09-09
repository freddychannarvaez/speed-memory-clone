import { NumberSelector } from "./components/NumberSelector"
import { TimeSelector } from "./components/TimeSelector"
import { TypeSelector } from "./components/TypeSelector"
import { useState } from "react"
import './App.css'
import { calculateNumbers } from "./services/calculateNumbers"
import { NumberInput } from "./components/NumberInput"

function App() {
  const [time, setTime] = useState(0.1)
  const [number, setNumber] = useState(6)
  const [type, setType] = useState(0)
  const [numbers, setNumbers] = useState([])
  const [hasStarted, setHasStarted] = useState(false)

  const onStartTest = () => {
    setHasStarted(true)
    console.log('start test')
    console.log(time)
    console.log(number)
    console.log(type)
    const numbers = calculateNumbers(number, type)
    setNumbers(numbers)
    console.log(numbers)
  }
  return (
    <>
      <div className="controls">
        <TimeSelector timeSelected={(time) => setTime(time)} />
        <NumberSelector numberSelected={(number) => setNumber(number)} />
        <TypeSelector typeSelected={(type) => setType(type)} />
        <button onClick={() => onStartTest()} >Start Test</button>

      </div>
      <div className="numbers">
        {numbers.map((number, index) => (
          <span key={index}>{number}</span>
        ))}
      </div>
      {
        hasStarted && (
          <NumberInput number={number} />
        )
      }
    </>
  )
}

export default App
