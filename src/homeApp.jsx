import { NavLink } from "react-router-dom";

export const HomeApp = () => {
  return (
    <>
      <h1>First Project React</h1>
      <h2>Choose one and you will be redirected to this project.</h2>
      <div className="d-flex flex-wrap align-items-center justify-content-center gap-5 mt-5">
        <NavLink className="project" to={"/gift"}>
          Git App
        </NavLink>
        <NavLink className="project" to={"/todo"}>
          Todo App
        </NavLink>
      </div>
    </>
  );
};
