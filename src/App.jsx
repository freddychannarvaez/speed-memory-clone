import { NumberSelector } from "./components/NumberSelector"
import { TimeSelector } from "./components/TimeSelector"
import { TypeSelector } from "./components/TypeSelector"
import { useState } from "react"
import './App.css'
import { calculateNumbers } from "./services/calculateNumbers"
import { NumberInput } from "./components/NumberInput"

const initialTime = 1000 // in milliseconds

function App() {
  const [time, setTime] = useState(initialTime)
  const [number, setNumber] = useState(6)
  const [type, setType] = useState(0)
  const [numbers, setNumbers] = useState([])
  const [isRunning, setIsRunning] = useState(false)
  const [hasEnded, setHasEnded] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const [answer, setAnswer] = useState([])
  const [grade, setGrade] = useState(false)

  const onStartTest = () => {
    setIsRunning(true)
    const numbers = calculateNumbers(number, type)
    setNumbers(numbers)

    setTimeout(() => {
      setIsRunning(false)
      setHasEnded(true)
    }, time)
  }

  // FIXME: Show right and wrong answers
  const onCheckTest = (answer) => {
    setAnswer(answer)
    setGrade(true)
    if (onValidateTest(answer, numbers)) {
      console.log('Right answer')
    } else {
      console.log('Wrong answer')
    }
  }

  const onSeeAnswer = () => {
    setShowAnswer(true)
  }

  // TODO:
  const onResetTest = () => {
    console.log('restart test')
  }

  const onValidateTest = (answer, solution) => {
    return answer.map((number, index) => {
      if (+number == solution[index]) {
        return true
      } else {
        return false
      }
    }).every((value) => value == true)
  }

  return (
    <>
    <h1>Speed Memory</h1>
      <div className="controls">
        <TimeSelector initialValue={initialTime} timeSelected={(time) => setTime(time)} />
        <NumberSelector numberSelected={(number) => setNumber(number)} />
        <TypeSelector typeSelected={(type) => setType(type)} />
        {
          !isRunning && !hasEnded && (
            <button type="button" className="start-button" onClick={() => onStartTest()}>Start Test</button>
          )
        }
        {
          hasEnded && (
            <div>
              <button type="button" className="answer-button" onClick={() => onSeeAnswer()}>See answer</button>
              {/* TODO: Create restart button and functionality */}
              {/* <button type="button" className="restart-button" onClick={() => onRestartTest()}>Restart</button> */}
            </div>
          )
        }

      </div>
      {
        isRunning && (    
        <div className="numbers">
          {numbers.map((number, index) => (
            <span key={index}>{number}</span>
          ))}
        </div>
        )
      }
      {
        isRunning && (
          <button type="button" className="reset-button" onClick={() => onResetTest()}>Reset</button>
        )
      }
      <div>
        {
          hasEnded && (
            <NumberInput number={number} onSubmit={(answer) => onCheckTest(answer)} grade={grade} />
          )
        }
        {
          hasEnded && grade && answer.length > 0 && (
            <div className="inputs">
              {
                numbers.map((number, index) => (
                  <span key={index}
                    className={number == answer[index] ? 'right' : 'wrong'}
                    >{number}</span>
                ))
              }
            </div>
          )
        }
      </div>
      {
        showAnswer && (
        <dialog className="answer-dialog">
          <button onClick={() => setShowAnswer(false)}>Close</button>
          <div>
            {numbers.map((number, index) => (
              <span key={index}>{number}</span>
            ))}
          </div>
        </dialog>
        )
      }
    </>
  )
}

export default App
