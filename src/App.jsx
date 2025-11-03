import "./App.css";
import SubmissionForm from "./components/SubmissionForm";
import Counter from "./components/Counter";
import Password from "./components/Password";
import CharacterCount from "./components/CharacterCount";
import DynamicList from "./components/DynamicList";
import SearchFilter from "./components/SearchFilter";
import Todo from "./components/Todo";
import FAQ from "./components/FAQ";
import StopWatch from "./components/StopWatch";

function App() {
  const que = [
    {
      "Who am i ?": "I am Mehul raj",
    },
    {
      "How am i ?": "I am good",
    },
  ];

  return (
    <>
      <StopWatch />
      {/* <FAQ que={que} /> */}
      {/* <Todo /> */}
      {/* <SearchFilter /> */}
      {/* <DynamicList /> */}
      {/* <CharacterCount /> */}
      {/* <Password /> */}
      {/* <Counter /> */}
      {/* <SubmissionForm /> */}
    </>
  );
}

export default App;
