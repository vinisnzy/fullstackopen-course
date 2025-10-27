const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part, index) => {
        return <Part key={index} name={part.name} exercises={part.exercises} />;
      })}
    </div>
  );
};

const Total = (props) => {
  const numbersOfExercises = props.parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  );
  return (
    <div>
      <p>Number of exercises {numbersOfExercises}</p>
    </div>
  );
};

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
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
