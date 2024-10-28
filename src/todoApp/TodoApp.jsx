import { useEffect } from "react";
import { useTodos } from "./hooks/useTodos";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { NavLink } from "react-router-dom";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  } = useTodos();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || []);
    console.log(todos);
  }, [todos]);

  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h1>
          TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount}</small>
        </h1>
        <NavLink to={"/"} className="btn btn-primary d-flex align-items-center">
          Volver al inicio
        </NavLink>
      </div>

      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
