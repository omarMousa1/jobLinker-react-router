import { NavLink, Outlet } from "react-router-dom";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>JobLinker</h1>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"about"}>About us</NavLink>
          <NavLink to={"help"}>Help</NavLink>
          <NavLink to={"careers"}>Careers</NavLink>
        </nav>
        <Breadcrumbs />
      </header>
      <hr />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
