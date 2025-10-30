import { useState } from "react"

const Button = ({ handleEvent, text }) => {
  return <button onClick={handleEvent}>{text}</button>
}

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}:</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad, total }) => {
  const average = () => (good - bad) / total
  const positive = () => (good / total) * 100 + "%"

  if (total > 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticLine text={"Good"} value={good} />
            <StatisticLine text={"Neutral"} value={neutral} />
            <StatisticLine text={"Bad"} value={bad} />
            <StatisticLine text={"Total"} value={total} />
            <StatisticLine text={"Average"} value={average()} />
            <StatisticLine text={"Positive"} value={positive()} />
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
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
