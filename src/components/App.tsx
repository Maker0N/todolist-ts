import React, { FC } from "react";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import Header from "./header";
import Todo from "./todo";
import Footer from "./footer";
import { ReducersType } from "../redux/store";
import { TasksType } from "../types/types";
import "../sass/main.scss";

const App: FC = () => {
  const pageSize = Math.floor(
    (document.body.getBoundingClientRect().height) / 61
  );

  const useTypedSelector: TypedUseSelectorHook<ReducersType> = useSelector;
  const { tasks, currentPage } = useTypedSelector((s) => s.todoReducer);

  const pageCount: number = Math.ceil(tasks.length / pageSize);
  let pages: number[] = [];
  for (let i = 1; i <= pageCount; i += 1) {
    pages = [...pages, i];
  }

  return (
    <main>
      <Header currentPage={currentPage} />
      <section className="section">
        {tasks
          .slice(
            pageSize * currentPage - pageSize,
            pageSize * currentPage
          )
          .map((it: TasksType) => {
            return (
              <Todo
                itTask={it}
                pageSize={pageSize}
                currentPage={currentPage}
                key={it.id}
              />
            );
          })}
      </section>
      <Footer
        tasks={tasks}
        pages={pages}
        pageSize={pageSize}
        currentPage={currentPage}
      />
    </main>
  );
};

export default App;
