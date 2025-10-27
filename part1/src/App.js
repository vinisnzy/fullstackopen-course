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
      <Part part={props.part1.part} exercise={props.part1.exercises} />
      <Part part={props.part2.part} exercise={props.part2.exercises} />
      <Part part={props.part3.part} exercise={props.part3.exercises} />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  );
};

const App = () => {
  const course = "Desenvolvimento de aplicação Half Stack";
  const part1 = {
    part: "Fundamentos da biblioteca React",
    exercises: 10,
  };
  const part2 = {
    part: "Usando props para passar dados",
    exercises: 7,
  };
  const part3 = {
    part: "Estado de um componente",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

export default App;
