import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h2>THis is header</h2>
      <Outlet />
      <h2>This is footer</h2>
    </div>
  );
};

export default Main;
