import { NumberSelector } from "./components/NumberSelector"
import { TimeSelector } from "./components/TimeSelector"
import { TypeSelector } from "./components/TypeSelector"
import { useState } from "react"
import { calculateNumbers } from "./services/calculateNumbers"
import { NumberInput } from "./components/NumberInput"
import githubLogo from './assets/github.svg';
import linkedinLogo from './assets/linkedin.svg';
import gmailLogo from './assets/gmail.svg';
import './App.css'

const initialTime = 1000 // in milliseconds
const initialLevel = 6 // Number of numbers to memorize
const githubRepo = 'https://github.com/freddychannarvaez/speed-memory-clone';
const portfolio = 'https://freddychannarvaez.com';

const socialMediaLinks = [
  {
    name: 'github',
    link: 'https://github.com/freddychannarvaez',
    logo: githubLogo
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/freddy-chan-narvaez/',
    logo: linkedinLogo
  },
  {
    name: 'gmail',
    link: 'mailto:freddychannarvaez@gmail.com',
    logo: gmailLogo
  }
]

function App() {
  const [time, setTime] = useState(initialTime)
  const [gameLevel, setGameLevel] = useState(initialLevel)
  const [testType, setTestType] = useState(0)
  const [gameLevels, setGameLevels] = useState([])
  const [hasGameStarted, setHasGameStarted] = useState(false)
  const [isMemorizeTimeRunning, setIsMemorizeTimeRunning] = useState(false)
  const [hasMemorizeTimeEnded, setHasMemorizeTimeEnded] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const [answer, setAnswer] = useState([])
  const [evaluate, setEvaluate] = useState(false)

  const onStartTest = () => {
    setHasGameStarted(true)
    setIsMemorizeTimeRunning(true)
    const numbers = calculateNumbers(gameLevel, testType)
    setGameLevels(numbers)

    setTimeout(() => {
      setIsMemorizeTimeRunning(false)
      setHasMemorizeTimeEnded(true)
    }, time)
  }

  const onCheckTest = (answer) => {
    setAnswer(answer)
    setEvaluate(true)
    // TODO: Add congratulations message when all the numbers are correct
    if (onValidateTest(answer, gameLevels)) {
      console.log('Right answer')
    } else {
      console.log('Wrong answer')
    }
  }

  const onSeeAnswer = () => {
    setShowAnswer(true)
  }

  const onResetTest = () => {
    console.log('restart test')
    setHasMemorizeTimeEnded(false)|
    setHasGameStarted(false)
    setIsMemorizeTimeRunning(false)
    setTime(initialTime)
    setGameLevel(initialLevel)
    setTestType(0)
    setGameLevels([])
    setEvaluate(false)
    setShowAnswer(false)
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
        <div className="selectors">
          <TimeSelector initialValue={initialTime} timeSelected={(time) => setTime(time)} hasStarted={hasGameStarted} />
          <NumberSelector numberSelected={(number) => setGameLevel(number)} hasStarted={hasGameStarted} />
          <TypeSelector typeSelected={(type) => setTestType(type)} hasStarted={hasGameStarted} />
        </div>
        <div className="buttons">
          {
            !hasGameStarted && (
              <button type="button" className="start-button" onClick={() => onStartTest()}>Start Test</button>
            )
          }
          {
            hasMemorizeTimeEnded && (
              <div className="answer-buttons">
                <button type="button" className="answer-button" onClick={() => onSeeAnswer()}>See answer</button>
                <button type="button" className="restart-button" onClick={() => onResetTest()}>Restart</button>
              </div>
            )
          }
        </div>

      </div>
      {
        isMemorizeTimeRunning && (    
        <div className="numbers">
          {gameLevels.map((number, index) => (
            <span key={index}>{number}</span>
          ))}
        </div>
        )
      }
      {
        hasMemorizeTimeEnded &&
        <div>
          <NumberInput number={gameLevel} onSubmit={(answer) => onCheckTest(answer)}
            evaluate={evaluate} />
          {
            hasMemorizeTimeEnded && evaluate && answer.length > 0 && (
              <div className="inputs">
                {
                  gameLevels.map((number, index) => (
                    <span key={index}
                      className={number == answer[index] ? 'right' : 'wrong'}
                      >{number}</span>
                  ))
                }
              </div>
            )
          }
        </div>
      }

        <div className='project-description'>
        <h2>Project description</h2>
        <p>This is a clone of the app Speed Memory. It is a simple game where you have to remember a sequence of numbers. The game is divided in three parts: the first part is to select the time and the second is to select the number of numbers you want to remember. The third part of the game is about the type of numbers you want to use. You can use either decimal or binary numbers. You can find more information<a href={githubRepo} target='_blank'> here.</a></p>
        <div className='social-info'>
          {
            socialMediaLinks.map((link, index) => 
              <a className='social-link' key={index} href={link.link} target='_blank'>
                <img src={link.logo}></img> 
              </a>
            )
          }
        </div>
        <p className='made-by'>Made with ❤️ by <a href={portfolio}>Freddy Chan Narváez</a></p>
      </div>
      {
        showAnswer && (
        <dialog className="answer-dialog">
          <button onClick={() => setShowAnswer(false)}>Close</button>
          <div>
            {gameLevels.map((number, index) => (
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
