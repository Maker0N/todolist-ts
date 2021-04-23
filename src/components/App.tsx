import React from "react";
import { useSelector } from "react-redux";
import Header from "./header";
import Todo from "./todo";
import "../sass/main.scss";

function App() {
  const { tasks } = useSelector((s: any) => s.todoReducer);
  console.log(tasks)
  return (
      <main className="App">
        <Header />
        <section>
          {tasks.map((it: any) => {
            return <Todo itTask={it.task} key={it.id}/>;
          })}
        </section>
      </main>
  );
}

export default App;
