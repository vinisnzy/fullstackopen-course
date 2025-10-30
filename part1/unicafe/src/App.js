import { useState } from "react"

const Button = ({ handleEvent, text }) => {
  return <button onClick={handleEvent}>{text}</button>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    const newValue = good + 1
    setGood(newValue)
  }

  const handleNeutral = () => {
    const newValue = neutral + 1
    setNeutral(newValue)
  }

  const handleBad = () => {
    const newValue = bad + 1
    setBad(newValue)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleEvent={() => handleGood()} text="Good" />
      <Button handleEvent={() => handleNeutral()} text="Neutral" />
      <Button handleEvent={() => handleBad()} text="Bad" />
      <div>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
      </div>
    </div>
  )
}

export default App
