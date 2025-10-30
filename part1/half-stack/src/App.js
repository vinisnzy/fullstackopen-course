const Header = ({ course }) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <div>
      <p>
        {name} {exercises}
      </p>
    </div>
  )
}

const Content = ({ parts, name, exercises }) => {
  return (
    <div>
      {parts.map((part, index) => {
        return <Part key={index} name={part.name} exercises={part.exercises} />
      })}
    </div>
  )
}

const Total = ({ parts }) => {
  const numbersOfExercises = parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  )
  return (
    <div>
      <p>Number of exercises {numbersOfExercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: "Desenvolvimento de aplicação Half Stack",
    parts: [
      {
        name: "Fundamentos da biblioteca React",
        exercises: 10,
      },
      {
        name: "Usando props para passar dados",
        exercises: 7,
      },
      {
        name: "Estado de um componente",
        exercises: 14,
      },
    ],
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
