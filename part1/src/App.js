const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercise}
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.totalExercise}</p>
    </div>
  );
};

const App = () => {
  const course = "Desenvolvimento de aplicação Half Stack";
  const part1 = "Fundamentos da biblioteca React";
  const exercises1 = 10;
  const part2 = "Usando props para passar dados";
  const exercises2 = 7;
  const part3 = "Estado de um componente";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercise={exercises1} />
      <Content part={part2} exercise={exercises2} />
      <Content part={part3} exercise={exercises3} />
      <Total totalExercise={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
