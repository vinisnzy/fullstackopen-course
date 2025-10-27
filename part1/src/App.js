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
        {props.part} {props.exercise}
      </p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].part} exercise={props.parts[0].exercises} />
      <Part part={props.parts[1].part} exercise={props.parts[1].exercises} />
      <Part part={props.parts[2].part} exercise={props.parts[2].exercises} />
    </div>
  );
};

const Total = (props) => {
  let sum = 0;
  props.parts.forEach((element) => {
    sum += element.exercises;
  });
  return (
    <div>
      <p>Number of exercises {sum}</p>
    </div>
  );
};

const App = () => {
  const course = "Desenvolvimento de aplicação Half Stack";
  const parts = [
    {
      part: "Fundamentos da biblioteca React",
      exercises: 10,
    },
    {
      part: "Usando props para passar dados",
      exercises: 7,
    },
    {
      part: "Estado de um componente",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
