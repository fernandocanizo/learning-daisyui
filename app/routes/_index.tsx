import type { MetaFunction } from "@remix-run/node";

import { NavLink } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Learning DaisyUI" },
    { name: "description", content: "Learning DaisyUI" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Demo plain DaisyUi vs React-Daisy</h1>
      <h2>Plain DaisyUi</h2>
      <ul>
        <li>
          <NavLink to="/daisy.login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/daisy.horizontal-menu">Horizontal menu</NavLink>
        </li>
        <li>
          <NavLink to="/daisy.sidenav">SideNav</NavLink>
        </li>
      </ul>

      <h2>React Daisy</h2>
      <ul>
        <li>
          <NavLink to="/react-daisy.login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/react-daisy.horizontal-menu">Horizontal menu</NavLink>
        </li>
        <li>
          <NavLink to="/react-daisy.sidenav">SideNav</NavLink>
        </li>
      </ul>
    </div>
  );
}
