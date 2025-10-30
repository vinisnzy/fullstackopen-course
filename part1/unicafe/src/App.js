import { useState } from "react"

const Button = ({ handleEvent, text }) => {
  return <button onClick={handleEvent}>{text}</button>
}

const Statistics = ({ good, neutral, bad, total }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Average: {(good * 1 + neutral * 0 + bad * -1) / total}</p>
      <p>Positive:{(good / total) * 100}%</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGood = () => {
    const newValue = good + 1
    setGood(newValue)
    setTotal(total + 1)
  }

  const handleNeutral = () => {
    const newValue = neutral + 1
    setNeutral(newValue)
    setTotal(total + 1)
  }

  const handleBad = () => {
    const newValue = bad + 1
    setBad(newValue)
    setTotal(total + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleEvent={() => handleGood()} text="Good" />
      <Button handleEvent={() => handleNeutral()} text="Neutral" />
      <Button handleEvent={() => handleBad()} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App
